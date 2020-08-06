import React, { FC, Dispatch } from "react";
import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import { ActionType, setFilter } from "../../redux/todoReducer";

type PropsType = {
  filter: string;
  setFilter: (filter: string) => void;
};
const SortPanel: FC<PropsType> = ({ filter, setFilter }: PropsType) => {
  const activeItem = (filterName: string) => {
    return filter === filterName ? "active" : "";
  };
  return (
    <ul className="nav nav-tabs todo__nav-tab">
      <li
        className={`nav-item nav-link ${activeItem("All")}`}
        onClick={() => setFilter("All")}
      >
        All
      </li>
      <li
        className={`nav-item nav-link ${activeItem("Active")}`}
        onClick={() => setFilter("Active")}
      >
        Active
      </li>
      <li
        className={`nav-item nav-link ${activeItem("completed")}`}
        onClick={() => setFilter("completed")}
      >
        completed
      </li>
    </ul>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  setFilter: (filter: string) => dispatch(setFilter(filter)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);
