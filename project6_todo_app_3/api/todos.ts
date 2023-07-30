// Under types you can see data schema for fetching
// Im using my mongoDB rest api which you can find on my github under repository project_a_day/project3

interface IErrorRes {
  data: null;
  message: string;
  success: false;
}
import { ITodo, IGetAllTodosRes, IGetSingleTodoRes } from "@/types/todos";

const BASE_URL = "http://127.0.0.1:5678/v1/todos";
const errorResponse: IErrorRes = {
  data: null,
  message: "Something went wrong",
  success: false,
};

// GET
// Get all todos
export const getAllTodos = async (): Promise<IGetAllTodosRes> => {
  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data: Promise<IGetAllTodosRes> = res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      data: [],
      success: false,
      message: "Something went wrong with fetch or Database connection",
      count: 0,
    };
  }
};

// POST
// Create new todo

export const createNewTodo = async (
  text: string
): Promise<IGetSingleTodoRes | IErrorRes> => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    if (!res) {
      return errorResponse;
    }
    const newTodo = res.json();
    return newTodo;
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};

//PUT
// Update todo by id

export const updateTodoById = async (
  todo: ITodo
): Promise<IGetSingleTodoRes | IErrorRes> => {
  try {
    const res = await fetch(`${BASE_URL}/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!res) {
      return errorResponse;
    }
    const updatedTodo = res.json();
    return updatedTodo;
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};

// DELETE
// Delete todo by id
export const deleteTodoById = async (
  id: string
): Promise<IGetSingleTodoRes | IErrorRes> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res) {
      return errorResponse;
    }
    const deletedTodo = res.json();
    return deletedTodo;
  } catch (error) {
    console.error(error);
    return errorResponse;
  }
};
