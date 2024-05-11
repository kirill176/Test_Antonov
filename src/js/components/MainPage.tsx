import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TodoState } from "../types/todo";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/action-creators/fetchTodo";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "../store";

const MainPage: FC = () => {
  const { todos, error, loading } =
    useSelector((state: TodoState) => ({
      todos: state.todos,
      error: state.error,
      loading: state.loading,
    })) || {};
  const dispatch = useDispatch<AppDispatch>();
  const [formShow, setFormShow] = useState<boolean>(false);
  useEffect(() => {
    if (todos.length === 0) {
      dispatch(fetchTodos());
    }
  }, [dispatch, todos]);

  if (loading) {
    return (
      <>
        <div className="message loading">
          <p>Loading data...</p>
          <br />
          <p>Please wait</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="message error">
        <p className="error__message">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className={`container ${formShow ? "blur" : ""}`}>
        <h1>Todo List</h1>
        <button className="add-todo" onClick={() => setFormShow(true)}>
          Add new Todo
        </button>
        <div className="todos">
          {todos.map((todo) => (
            <Todo key={uuidv4()} todo={todo} />
          ))}
        </div>
      </div>
      {formShow ? <AddTodo setFormShow={setFormShow} /> : null}
    </>
  );
};

export default MainPage;
