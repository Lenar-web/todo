import React, { FC, useEffect } from "react";
import "./App.css";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import SortPanel from "./components/SortPanel/SortPanel";
import { useDispatch, useSelector } from "react-redux";
import { getToDo, getAuth, signOut } from "./redux/todoThunk";
import { userSelector } from "./redux/selectors";
import Login from "./components/login/Login";

const App: FC = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getToDo());
    } else {
      dispatch(getAuth());
    }
  }, [dispatch, user]);
  
  const signOutHandler = () => {
    dispatch(signOut());
  };
  if (!user) {
    return <Login />;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" onClick={signOutHandler}>
                <div className="nav-link">Sign Out</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="todo__title">Hi {user}, this is your to-do list</h1>
        <div className="todo__row">
          <Form />
        </div>
        <SortPanel />
        <List />
      </div>
    </>
  );
};

export default App;
