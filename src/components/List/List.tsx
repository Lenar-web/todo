import React, { FC } from "react";
import Item from "./Item/Item";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { ToDo } from "../../redux/todoReducer";

type PropsType = {
  todo: Array<ToDo>;
  filter: string;
};
const List: FC<PropsType> = ({ todo, filter }: PropsType) => {
  const filterToDo = (todo: Array<ToDo>, filter: string): Array<ToDo> => {
    switch (filter) {
      case "All":
        return todo;
      case "Complited":
        return todo.filter((item) => item.complited === true);
      case "Active":
        return todo.filter((item) => item.complited === false);
      default:
        return todo;
    }
  };

  const toDos = filterToDo(todo, filter).map((todo: ToDo) => {
    return (
      <Item
        key={todo.id}
        text={todo.text}
        complited={todo.complited}
        id={todo.id}
      />
    );
  });
  return (
    <div>
      <div className="list-group">{toDos}</div>
    </div>
  );
};

const mapStateToProps = (store: AppStateType) => ({
  todo: store.todo,
  filter: store.filter,
});

export default connect(mapStateToProps)(List);
