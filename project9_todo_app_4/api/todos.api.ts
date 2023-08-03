import { ITodo, ITodoCreateNew } from "@/types/todos.t";
import axios, { AxiosResponse } from "axios";

export const todosApi = axios.create({
  baseURL: "http://127.0.0.1:5678/todos",
});

export const getTodos = async (): Promise<ITodo[]> => {
  const data = await todosApi.get("");
  return data.data;
};

export const createTodo = async (
  todo: ITodoCreateNew
): Promise<AxiosResponse> => {
  return await todosApi.post("", todo);
};

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse> => {
  return await todosApi.put(`/${todo.id}`, todo);
};

export const deleteTodo = async (todo: ITodo): Promise<AxiosResponse> => {
  return await todosApi.delete(`/${todo.id}`);
};
