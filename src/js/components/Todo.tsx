import React, { FC } from "react";
import { TodoTypes } from "../types/types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/action-creators/deleteTodo";
import { Link } from "react-router-dom";
import { AppDispatch } from "../store";

interface TodoItem {
  todo: TodoTypes;
}

const Todo: FC<TodoItem> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="todos__item">
      <div className="todos__title">
        <Link to={`/details/${todo.id}`}>{todo.title}</Link>
      </div>
      <div className="todos__button">
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
