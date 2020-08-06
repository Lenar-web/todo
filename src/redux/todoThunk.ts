import { Dispatch } from "redux";
import { TodoActionType, setAllTodo } from "./todoReducer";
import { AppActionType, setLoading } from "./appReducer";
import { todoAPI } from "../components/api/api";
import { ToDo } from "../types/todo";
type ThunkDispatch = Dispatch<TodoActionType | AppActionType>;
export const getToDo = () => async (dispatch: ThunkDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await todoAPI.fetchTodo();
    const data = response as unknown as ToDo[];
    dispatch(setAllTodo(data));
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading(false));
};
