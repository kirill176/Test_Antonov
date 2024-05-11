import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";
import axios from "axios";

export const addTodo = (title: string, description: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          userId: 1,
          id: Date.now(),
          title: title,
          completed: false,
          description: description,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response.data);
      console.log(Date.now());
      dispatch({
        type: TodoActionTypes.ADD_TODO,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.ERROR,
        payload: "Error add task",
      });
    }
  };
};
