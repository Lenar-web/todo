import React, { FC, useEffect } from "react";
import "./App.css";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import SortPanel from "./components/SortPanel/SortPanel";
import { useDispatch } from "react-redux";
import { getToDo } from "./redux/todoThunk";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToDo());
  }, [dispatch]);
  return (
    <div className="container">
      <h1 className="todo__title">My todo</h1>
      <div className="todo__row">
        <Form />
      </div>
      <SortPanel />
      <List />
    </div>
  );
};

export default App;
