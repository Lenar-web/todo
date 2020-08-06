import axios from "axios";
import { ToDo } from "../../types/todo";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
});

export const todoAPI = {
  fetchTodo() {
    instance.get("todos").then((res) => {
      return res.data;
    });
  },
  addTodo(todo: ToDo) {
    instance.post("todos", todo).then((res) => {
      return res.data;
    });
  },
  deleteTodo(id: number) {
    instance.delete(`todos/${id}`).then((res) => {
      return res.data;
    });
  },
  updateTodo(id: number, completed: boolean) {
    instance.put(`todos/${id}`, { completed }).then((res) => {
      return res.data;
    });
  },
};
