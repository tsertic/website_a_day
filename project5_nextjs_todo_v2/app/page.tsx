import Image from "next/image";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";

export default function Home() {
  return (
    <main className="h-screen flex justify-centar items-center">
      <div className="min-w-[500px] mx-auto pt-5 p-4 bg-base-100">
        <h1 className="text-center uppercase text-2xl mb-6">Todo App</h1>
        <TodoHeader />
        <TodoList />
      </div>
    </main>
  );
}
