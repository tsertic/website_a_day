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

export const updateTask = async (task: ITask) => {
  const res = await fetch(`${BASE_URL}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const updatedTodo = res.json();
  return updatedTodo;
};

export const deleteTask = async (taskId: string) => {
  const res = await fetch(`${BASE_URL}/${taskId}`, {
    method: "DELETE",
  });
  const deletedTask = res.json();
  return deletedTask;
};
