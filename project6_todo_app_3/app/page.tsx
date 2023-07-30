import { getAllTodos } from "@/api/todos";
import { ErrorReload } from "./components/ErrorReload";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodosList } from "./components/TodosList";

export default async function Home() {
  const { data, success, message } = await getAllTodos();
  return (
    <main className="flex flex-col items-center justify-between gap-5 w-[500px] mx-auto p-5 ">
      <h1 className="text-2xl text-center">Todo App</h1>
      <AddNewTodo success={success} />
      {success && <TodosList todos={data} />}
      {!success && <ErrorReload message={message} />}
    </main>
  );
}
