"use client";
interface ITodoItem {
  todo: ITodo;
}
import { updateTodo } from "@/api/todos";
import { ITodo } from "@/types/todo";
import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
export const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const router = useRouter();
  const handleCheckTodo = async () => {
    await updateTodo({ ...todo, finished: !todo.finished });
    router.refresh();
  };
  return (
    <tr>
      <div className="form-control">
        <div className="cursor-pointer label">
          <input
            onClick={handleCheckTodo}
            type="checkbox"
            checked={todo.finished}
            className="checkbox checkbox-success"
          />
        </div>
      </div>
      <td className="w-full">{todo.text}</td>
      <td className="flex gap-3 justify-around">
        <AiOutlineEdit cursor="pointer" size={20} />
        <AiOutlineDelete cursor="pointer" size={20} />
      </td>
    </tr>
  );
};
