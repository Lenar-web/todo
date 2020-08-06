import axios from "axios";
import { ToDo } from "../../types/todo";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
});

export const todoAPI = {
  fetchTodo() {
    return instance.get("todos").then((res) => res.data);
  },
  addTodo(todo: ToDo) {
    instance.post("todos", todo).then((res) => res.data);
  },
  deleteTodo(id: number) {
    instance.delete(`todos/${id}`).then((res) => {
      return res.data;
    });
  },
  updateTodo(id: number, complited: boolean) {
    instance.put(`todos/${id}`, { complited }).then((res) => {
      return res.data;
    });
  },
};
