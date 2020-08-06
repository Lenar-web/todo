import React, { FC, useState, useEffect, SyntheticEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { toggleToDo, deleteToDo, TodoActionType } from "../../../redux/todoReducer";
import { AppStateType } from "../../../redux/store";

type PropsType = {
  text: string;
  completed: boolean;
  id: string;
  onToggleToDo: (id: string) => void;
  onDeleteToDo: (id: string) => void;
};
const Item: FC<PropsType> = ({
  text,
  id,
  completed,
  onToggleToDo,
  onDeleteToDo,
}: PropsType) => {
  const [checked, setChecked] = useState(completed);
  useEffect(() => {
    setChecked(completed);
  }, [completed]);
  const handleChange = (e: SyntheticEvent) => {
    onToggleToDo(id);
  };
  const deleteToDo = (e: SyntheticEvent) => {
    onDeleteToDo(id);
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

const mapStateToProps = (state: AppStateType) => ({});
const mapDispatchToProps = (dispatch: Dispatch<TodoActionType>) => ({
  onToggleToDo: (id: string) => dispatch(toggleToDo(id)),
  onDeleteToDo: (id: string) => dispatch(deleteToDo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Item);
