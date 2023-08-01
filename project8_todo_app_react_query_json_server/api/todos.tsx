import { ITodo } from "@/types/todos";
import axios, { AxiosResponse } from "axios";
export const todoApi = axios.create({
  baseURL: "http://127.0.0.1:5678/todos",
});
export const getTodos = async (): Promise<ITodo[]> => {
  const res = await todoApi.get("");
  return res.data;
};

export const updateTodo = async (todo: ITodo): Promise<AxiosResponse> => {
  return await todoApi.patch(`/${todo.id}`, todo);
};
export const deleteTodo = async (todo: ITodo): Promise<AxiosResponse> => {
  return await todoApi.delete(`/${todo.id}`);
};
