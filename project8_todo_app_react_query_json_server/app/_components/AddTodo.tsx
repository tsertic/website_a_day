"use client";

import { createTodo } from "@/api/todos";
import React, { ReactEventHandler, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
export const AddTodo = () => {
  const [text, setText] = useState("");
  const useQuery = useQueryClient();
  const createTodoMutation = useMutation(createTodo, {
    onSuccess: () => useQuery.invalidateQueries(),
  });
  const handleFormSubmit: ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newTodo = {
      completed: false,
      userId: 1,
      title: text,
    };
    createTodoMutation.mutate(newTodo);
    setText("");
  };
  return (
    <form
      className="rounded-xl overflow-hidden my-2 flex gap-4 "
      onSubmit={handleFormSubmit}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-lg"
      />
      <button
        type="submit"
        className="btn btn-outline text-base-100 border-base-100 mr-2 hover:bg-base-100 hover:border-base-100 hover:text-black"
      >
        <AiOutlineUpload size={20} />
      </button>
    </form>
  );
};
