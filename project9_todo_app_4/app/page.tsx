import { TodosList } from "@/components/Todos/TodosList";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[600px] w-full rounded-xl mt-5 mx-auto bg-neutral gap-3 py-3 px-2">
      <h1 className="text-center uppercase text-2xl">Todo App v4</h1>
      <h3>Add Todo</h3>
      <TodosList />
    </main>
  );
}
