import React, { FC, useState, useEffect, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { onDeleteTodo, onChangeTodo } from "../../../redux/todoThunk";

type PropsType = {
  text: string;
  completed: boolean;
  id: string;
};
const Item: FC<PropsType> = ({ text, id, completed }: PropsType) => {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  useEffect(() => {
    setChecked(completed);
  }, [completed]);
  const handleChange = (e: SyntheticEvent) => {
    dispatch(onChangeTodo(id));
  };
  const deleteToDo = (e: SyntheticEvent) => {
    dispatch(onDeleteTodo(id));
  };
  return (
    <div
      className={`todo__item list-group-item list-group-item-action ${
        checked ? "disabled" : ""
      }`}
    >
      {text}
      <div className="todo__checkbox custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={id}
          checked={checked}
          onChange={handleChange}
        />
        <label className="custom-control-label" htmlFor={id}>
          completed
        </label>
      </div>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={deleteToDo}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
