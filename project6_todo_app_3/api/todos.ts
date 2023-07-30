// Under types you can see data schema for fetching
// Im using my mongoDB rest api which you can find on my github under repository project_a_day/project3

import { ITodo, ITodosApiResponse } from "@/types/todos";
const BASE_URL = "http://127.0.0.1:5678/v1/todos";
const errorResponse = {
  data: [],
  message: "Something went wrong",
  success: false,
  _id: "error",
};
// GET
// Get all todos
export const getAllTodos = async (): Promise<ITodosApiResponse> => {
  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const data: Promise<ITodosApiResponse> = res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      data: [],
      success: false,
      message: "Something went wrong with fetch or Database connection",
    };
  }
};

// POST
// Create new todo

export const createNewTodo = async (
  text: string
): Promise<ITodosApiResponse> => {
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

// DELETE
// Delete todo by id
