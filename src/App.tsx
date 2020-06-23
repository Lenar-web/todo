import React, { FC } from "react";
import "./App.css";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import SortPanel from "./components/SortPanel/SortPanel";

const App: FC = () => {
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
