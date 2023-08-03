"use client";
interface AddTodo {
  closeModal: () => void;
}
import { createTodo } from "@/api/todos.api";
import { ITodoCreateNew } from "@/types/todos.t";
import React, { ReactEventHandler, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

export const AddTodo: React.FC<AddTodo> = ({ closeModal }) => {
  const queryClient = useQueryClient();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setdueDate] = useState("");
  const createMutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      setTaskTitle("");
      setTaskDescription("");
      setdueDate("");
      closeModal();
    },
  });
  const handleSubmitForm: ReactEventHandler<HTMLFormElement> = async (e) => {
    //TODO : add validation for fields, not important for this exercise
    e.preventDefault();
    const newTodo: ITodoCreateNew = {
      task: taskTitle,
      description: taskDescription,
      due_date: dueDate,
      completed: false,
    };
    await createMutation.mutate(newTodo);
  };
  return (
    <div>
      <h1 className="text-center uppercase text-xl">New Task</h1>
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            placeholder="Task title"
            className="input input-info w-full max-w-lg"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            onChange={(e) => setTaskDescription(e.target.value)}
            className="textarea textarea-info w-full"
            placeholder="Task Description"
            value={taskDescription}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="due_date">Due Date</label>
          <div className="relative max-w-lg">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-info"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              value={dueDate}
              onChange={(e) => setdueDate(e.target.value)}
              type="date"
              className="bg-transparent border border-info  text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-transparent dark:border-info dark:placeholder-gray-400 dark:text-white dark:focus:ring-info dark:focus:border-blue-500"
              placeholder="Select date"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-outline w-full border-info">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
