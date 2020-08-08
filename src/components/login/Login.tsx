import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/todoThunk";

const Login: FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (val: React.ChangeEvent<HTMLInputElement>) => {
    setInput(val.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signIn(input));
  };
  return (
    <div className="container">
      <form className="login-form" method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Please enter your name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={handleChange}
            value={input}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
