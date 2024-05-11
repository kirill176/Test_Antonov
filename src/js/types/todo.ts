import { TodoTypes } from "./types";

export interface TodoState {
  todos: TodoTypes[];
  loading: boolean;
  error: null | string;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  UPDATE_TODO = "UPDATE_TODO",
  ERROR = "ERROR",
}

interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: TodoTypes[];
}

interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  payload: TodoTypes;
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO;
  payload: number;
}

interface UpdateTodoAction {
  type: TodoActionTypes.UPDATE_TODO;
  payload: TodoTypes;
}

interface ErrorAction {
  type: TodoActionTypes.ERROR;
  payload: string;
}

export type TodoAction =
  | FetchTodosAction
  | FetchTodoSuccessAction
  | FetchTodosErrorAction
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | ErrorAction;
