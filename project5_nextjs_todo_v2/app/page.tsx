import Image from "next/image";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";
import { getAllTodos } from "@/api/todos";

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className="h-screen flex justify-centar items-center">
      <div className="min-w-[500px] mx-auto pt-5 p-4 bg-base-100">
        <h1 className="text-center uppercase text-2xl mb-6">Todo App</h1>
        <TodoHeader todos={todos} />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
