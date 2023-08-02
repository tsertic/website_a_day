import { AddTodo } from "./_components/AddTodo";
import { TodoList } from "./_components/TodoList";

export default function Home() {
  return (
    <main className="max-w-[500px] w-full mx-auto bg-primary my-5 p-2 rounded-xl shadow-xl">
      <h1 className="text-center text-2xl uppercase text-base-100">
        Todo List
      </h1>
      <AddTodo />
      <TodoList />
    </main>
  );
}
