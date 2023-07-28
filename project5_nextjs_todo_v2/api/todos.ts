import { ITodo } from "@/types/todo";

const BASE_URL = "http://127.0.0.1:8888/todos";

//@GET
// http://127.0.0.1:8888/todos
// Get All Todos

export const getAllTodos = async (): Promise<ITodo[]> => {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = res.json();
  return data;
};

//@POST
// http://127.0.0.1:8888/todos
// Create new todo

export const postTodo = async (todo: ITodo): Promise<ITodo> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to create todo");
  }
  const data = res.json();
  return data;
};

//@GET
// http://127.0.0.1:8888/todos/:id
// Get todo by id

export const getTodoById = async (id: string): Promise<ITodo> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch todo by id");
  }
  const data = res.json();
  return data;
};

//@PUT
// http://127.0.0.1:8888/todos/:id
// Update todo
export const updateTodo = async (todo: ITodo): Promise<ITodo> => {
  const res = await fetch(`${BASE_URL}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to update todo by id: ${todo.id}`);
  }
  const data = res.json();
  return data;
};
//@DELETE
// http://127.0.0.1:8888/todos/:id
// Delete todo
export const deleteTodoById = async (id: string): Promise<ITodo> => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to delete todo with id ${id}`);
  }
  const data = res.json();
  return data;
};
