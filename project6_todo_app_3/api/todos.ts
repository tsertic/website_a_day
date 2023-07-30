import { ITodosApiResponse } from "@/types/todos";
const BASE_URL = "http://127.0.0.1:5678/v1/todos";
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
