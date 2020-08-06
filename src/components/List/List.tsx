import React, { FC } from "react";
import Item from "./Item/Item";
import { useSelector } from "react-redux";
import { ToDo } from "../../types/todo";
import { filterSelector, todoSelector } from "../../redux/todoSelectors";

const List: FC = () => {
  const todo = useSelector(todoSelector);
  const filter = useSelector(filterSelector);
  const filterToDo = (todo: Array<ToDo>, filter: string): Array<ToDo> => {
    switch (filter) {
      case "All":
        return todo;
      case "completed":
        return todo.filter((item) => item.completed === true);
      case "Active":
        return todo.filter((item) => item.completed === false);
      default:
        return todo;
    }
  };
  const toDos = filterToDo(todo, filter).map((todo: ToDo) => {
    return (
      <Item
        key={todo.id}
        text={todo.text}
        completed={todo.completed}
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

export default List;
