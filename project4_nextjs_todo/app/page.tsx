import { getAllTasks } from "@/api";
import { AddTask } from "./components/AddTask";
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";

export default async function Home() {
  const tasks = await getAllTasks();

  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center flex flex-col my-5 gap-4">
        <h1 className="text-2xl font-bold ">todo list app</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
