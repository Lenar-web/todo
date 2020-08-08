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
    return instance.post("todos", todo).then((res) => res);
  },
  deleteTodo(id: string) {
    return instance.delete(`todos/${id}`).then((res) => res);
  },
  updateTodo(id: string) {
    return instance.put(`todos/${id}`).then((res) => res);
  },
  login(name: string) {
    return instance.post("login", { name }).then((res) => res);
  },
  getAuthUser() {
    return instance.get("auth").then((res) => res.data);
  },
  signOut() {
    return instance.put("signout").then((res) => res);
  }
};
