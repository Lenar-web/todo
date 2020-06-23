import React, { FC, useState, useEffect, SyntheticEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { toggleToDo, deleteToDo, ActionType } from "../../../redux/todoReducer";
import { AppStateType } from "../../../redux/store";

type PropsType = {
  text: string;
  complited: boolean;
  id: string;
  onToggleToDo: (id: string) => void;
  onDeleteToDo: (id: string) => void;
};
const Item: FC<PropsType> = ({
  text,
  id,
  complited,
  onToggleToDo,
  onDeleteToDo,
}: PropsType) => {
  const [checked, setChecked] = useState(complited);
  useEffect(() => {
    setChecked(complited);
  }, [complited]);
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
          Complited
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
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  onToggleToDo: (id: string) => dispatch(toggleToDo(id)),
  onDeleteToDo: (id: string) => dispatch(deleteToDo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Item);
