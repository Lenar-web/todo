import { createStore } from "redux";
import todoReducer from "./todoReducer";

type RootReducerType = typeof todoReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(todoReducer);

export default store;
