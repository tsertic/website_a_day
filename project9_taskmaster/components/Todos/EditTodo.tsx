"use client";
interface IEditTodo {
  todo: ITodo;
  closeModal: () => void;
}
import { updateTodo } from "@/api/todos.api";
import { ITodo } from "@/types/todos.t";
import React, { ReactEventHandler, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

export const EditTodo: React.FC<IEditTodo> = ({ todo, closeModal }) => {
  const queryClient = useQueryClient();
  const { task, description, due_date } = todo;
  const [taskTitle, setTaskTitle] = useState(task);
  const [taskDescription, setTaskDescription] = useState(description);
  const [dueDate, setdueDate] = useState(due_date);
  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
  console.log(dueDate);
  const handleSubmitForm: ReactEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateMutation.mutate({
      ...todo,
      task: taskTitle,
      description: taskDescription,
      due_date: dueDate,
    });
    closeModal();
  };
  return (
    <div>
      <h1 className="text-center uppercase text-xl">Edit Task</h1>
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            placeholder="Type here"
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
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};
