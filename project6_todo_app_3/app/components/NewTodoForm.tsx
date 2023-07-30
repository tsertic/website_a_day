"use client";

interface INewTodoForm {
  closeModal: () => void;
}

import { createNewTodo } from "@/api/todos";
import React, { useState, ReactEventHandler } from "react";
import { useRouter } from "next/navigation";
export const NewTodoForm: React.FC<INewTodoForm> = ({ closeModal }) => {
  const router = useRouter();
  const [textValue, setTextValue] = useState("");
  const handleSubmitForm: ReactEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await createNewTodo(textValue);
    const success = res.success;
    console.log(success);
    if (success) {
      setTextValue("");
      closeModal();
      router.refresh();
    } else {
      //TODO: better error handling,not important for this exercise
      alert("Something went wrong");
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <h2 className="text-center text-lg mb-3">Add New Todo</h2>
      <div className="flex gap-4">
        <input
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input w-full max-w-lg"
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
};
