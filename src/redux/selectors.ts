import { AppStateType } from "./store";

export const filterSelector = (state: AppStateType) => state.todo.filter;
export const todoSelector = (state: AppStateType) => state.todo.todo;
export const loadingSelector = (state: AppStateType) => state.app.isLoading;
export const userSelector = (state: AppStateType) => state.app.user;
