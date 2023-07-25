import { ITask } from "./types/tasks";

const BASE_URL = "http://127.0.0.1:5678/tasks";

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(BASE_URL);
  const tasks = res.json();
  return tasks;
};
