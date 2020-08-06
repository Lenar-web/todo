import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./todoReducer";
import appReducer from "./appReducer";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const rootReducer = combineReducers({
  todo: todoReducer,
  app: appReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
