import React, { FC, useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/todoThunk";

const Form: FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(addNewTodo(input));
    setInput("");
  };
  return (
    <form
      action=""
      className="todo__form form-inline my-2"
      onSubmit={handleSubmit}
    >
      <input
        className="todo__input form-control mr-sm-2"
        type="text"
        placeholder="To do text"
        name="todo"
        value={input}
        onChange={handleChange}
      />
      <button className="btn btn-secondary my-3 my-sm-0" type="submit">
        Add
      </button>
    </form>
  );
};
// const mapStateToProps = (state: AppStateType) => ({});
// const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
//   onAddToDo: (text: string) => {
//     dispatch(addToDo(text));
//   },
// });
export default Form;
