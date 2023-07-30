interface IDeleteTodoForm {
  todo: ITodo;
  closeModal: () => void;
}
import { deleteTodoById } from "@/api/todos";
import { ITodo } from "@/types/todos";
import React from "react";

export const DeleteTodoForm: React.FC<IDeleteTodoForm> = ({
  todo,
  closeModal,
}) => {
  const handleDeleteTodo = async () => {
    const res = await deleteTodoById(todo._id);

    if (res.success) {
      closeModal();
    } else {
      //TODO: better error handling,not important for this exercise
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <h2 className="text-center text-lg mb-3">Are You Sure?</h2>
      <div className="flex justify-around">
        <button
          onClick={handleDeleteTodo}
          className="btn btn-outline border-error"
        >
          Delete
        </button>
        <button
          onClick={() => closeModal()}
          className="btn btn-outline border-accent"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
