import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";
import axios from "axios";

export const deleteTodo = (id: number) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      dispatch({
        type: TodoActionTypes.DELETE_TODO,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.ERROR,
        payload: "Error delete task",
      });
    }
  };
};
