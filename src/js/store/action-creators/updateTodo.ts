import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";
import axios from "axios";

export const updateTodo = (
  id: number,
  completed: boolean,
  title: string,
  description: string
) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          id: id,
          title: title,
          completed: completed,
          userId: 1,
          description: description,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      dispatch({ type: TodoActionTypes.UPDATE_TODO, payload: response.data });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.ERROR,
        payload: "Error update task",
      });
    }
  };
};
