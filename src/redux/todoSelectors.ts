import { AppStateType } from "./store";

export const filterSelector = (state: AppStateType) => state.todo.filter;
export const todoSelector = (state: AppStateType) => state.todo.todo;
