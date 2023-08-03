interface IDeleteTodo {
  todo: ITodo;
  closeModal: () => void;
}
import { deleteTodo } from "@/api/todos.api";
import { ITodo } from "@/types/todos.t";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
export const DeleteTodo: React.FC<IDeleteTodo> = ({ todo, closeModal }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
  const handleDeleteTodo = async () => {
    await deleteMutation.mutate(todo);
    closeModal();
  };
  return (
    <div>
      <h1 className="text-center uppercase text-xl mb-4">Delete Task</h1>
      <div className="flex justify-around">
        <button
          className="btn btn-outline border-error"
          onClick={handleDeleteTodo}
        >
          Delete
        </button>
        <button
          className="btn btn-outline border-success"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
