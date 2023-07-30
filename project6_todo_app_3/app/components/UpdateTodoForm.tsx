"use client";

interface IEditTodoForm {
  closeModal: () => void;
  todo: ITodo;
}

import { updateTodoById } from "@/api/todos";
import { ITodo } from "@/types/todos";
import React, { useState, ReactEventHandler } from "react";
import { useRouter } from "next/navigation";
export const EditTodoForm: React.FC<IEditTodoForm> = ({ closeModal, todo }) => {
  const router = useRouter();
  const [textValue, setTextValue] = useState(todo.text);
  const handleSubmitForm: ReactEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const updatedTodo = { ...todo, text: textValue };
    const res = await updateTodoById(updatedTodo);
    if (res.success) {
      closeModal();
      router.refresh();
    } else {
      //TODO: better error handling,not important for this exercise
      alert("Something went wrong");
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <h2 className="text-center text-lg mb-3">Edit Todo</h2>
      <div className="flex gap-4">
        <input
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input w-full max-w-lg"
        />
        <button className="btn">Edit</button>
      </div>
    </form>
  );
};
