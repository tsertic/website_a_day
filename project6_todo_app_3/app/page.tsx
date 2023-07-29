import { getAllTodos } from "@/api/todos";
import Image from "next/image";

export default async function Home() {
  const apiResponseTest = await getAllTodos();
  console.log(apiResponseTest);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo mongo app</h1>
    </main>
  );
}
