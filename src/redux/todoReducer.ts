import { ActionTypes } from "./ActionTypes";
import { v4 as uuid } from "uuid";
import { ToDo } from "../types/todo";
const initialState: InitialStateType = {
  todo: [],
  filter: "All",
};
type InitialStateType = {
  todo: Array<ToDo>;
  filter: string;
};

export type ActionType =
  | ReturnType<typeof addToDo>
  | ReturnType<typeof toggleToDo>
  | ReturnType<typeof deleteToDo>
  | ReturnType<typeof setFilter>;

const todoReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,

        todo: [
          ...state.todo,
          { text: action.text, completed: false, id: uuid() },
        ],
      };
    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.id),
      };
    case ActionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export const addToDo = (text: string) =>
  ({
    type: ActionTypes.ADD_TODO,
    text,
  } as const);

export const toggleToDo = (id: string) =>
  ({
    type: ActionTypes.TOGGLE_TODO,
    id,
  } as const);

export const deleteToDo = (id: string) =>
  ({
    type: ActionTypes.DELETE_TODO,
    id,
  } as const);
export const setFilter = (filter: string) =>
  ({
    type: ActionTypes.SET_FILTER,
    filter,
  } as const);

export default todoReducer;
