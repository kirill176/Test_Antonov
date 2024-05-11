import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TodoState } from "../types/todo";
import { useNavigate, useParams } from "react-router-dom";
import UpdateTodo from "./UpdateTodo";

const TodoDetailsPage = () => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const todo = useSelector((state: TodoState) => {
    const todos = state.todos;
    const findTodos = todos.find((todo) => todo.id === parseInt(id || "", 10));
    return findTodos;
  });

  const error = useSelector((state: TodoState) => {
    const e = state.error;
    return e;
  });

  return (
    <>
      <div className={`todo-details ${showUpdate ? "blur" : ""}`}>
        <button onClick={() => navigate(-1)}>Turn Back</button>
        <h1>{todo?.title}</h1>
        <p>author: user{todo?.userId}</p>
        <p>Status: {todo?.completed ? "Completed" : "Not completed"}</p>
        <h6>Description:</h6>
        <p>
          {todo?.description && todo.description.length > 0
            ? todo.description
            : "No description"}
        </p>
        <button className="update" onClick={() => setShowUpdate(true)}>
          Update todo
        </button>
      </div>
      {showUpdate && todo ? (
        <UpdateTodo todo={todo} setShow={setShowUpdate} />
      ) : null}
    </>
  );
};

export default TodoDetailsPage;
