import { ITask } from "./types/tasks";

const BASE_URL = "http://127.0.0.1:5678/tasks";

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  const tasks = res.json();
  return tasks;
};

export const postNewTask = async (task: string): Promise<ITask> => {
  const newTask = { task: task };
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(newTask), // body data type must match "Content-Type"
  });
  const newTodo = res.json();
  return newTodo;
};
