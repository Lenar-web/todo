import { Dispatch } from "redux";
import {
  TodoActionType,
  setAllTodo,
  addTodo,
  deleteTodo,
  toggleTodo,
} from "./todoReducer";
import { AppActionType, setLoading, setUser } from "./appReducer";
import { todoAPI } from "../components/api/api";
import { ToDo } from "../types/todo";
import { v4 as uuid } from "uuid";

type ThunkDispatch = Dispatch<TodoActionType | AppActionType>;
export const getToDo = () => async (dispatch: ThunkDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await todoAPI.fetchTodo();
    const data = (response as unknown) as ToDo[];
    dispatch(setAllTodo(data));
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading(false));
};
export const addNewTodo = (todoText: string) => async (
  dispatch: ThunkDispatch
) => {
  const todo = { text: todoText, completed: false, id: uuid() };
  try {
    const response = await todoAPI.addTodo(todo);
    if (response) {
      dispatch(addTodo(todo));
    }
  } catch (error) {
    console.log("Ошибка");
  }
};
export const onDeleteTodo = (id: string) => async (dispatch: ThunkDispatch) => {
  try {
    const response = await todoAPI.deleteTodo(id);
    if (response) {
      dispatch(deleteTodo(id));
    }
  } catch (error) {
    console.log("Ошибка");
  }
};
export const onChangeTodo = (id: string) => async (dispatch: ThunkDispatch) => {
  try {
    const response = await todoAPI.updateTodo(id);
    if (response) {
      dispatch(toggleTodo(id));
    }
  } catch (error) {
    console.log("Ошибка");
  }
};
export const getAuth = () => async (dispatch: ThunkDispatch) => {
  try {
    const response = await todoAPI.getAuthUser();
    if (response) {
      dispatch(setUser(response));
    }
  } catch (error) {
    console.log("Ошибка");
  }
};
export const signIn = (name: string) => async (dispatch: ThunkDispatch) => {
  try {
    const response = await todoAPI.login(name);
    if (response) {
      dispatch(setUser(name));
    }
  } catch (error) {
    console.log("Ошибка");
  }
};
export const signOut = () => async (dispatch: ThunkDispatch) => {
  try {
    const response = await todoAPI.signOut();
    if (response) {
      dispatch(setUser(null));
    }
  } catch (error) {
    console.log("Ошибка");
  }
};
