interface IDeleteTodoForm {
  todo: ITodo;
  closeModal: () => void;
}
import { ITodo } from "@/types/todo";
import React from "react";
import { useRouter } from "next/navigation";
import { deleteTodoById } from "@/api/todos";
export const DeleteTodoForm: React.FC<IDeleteTodoForm> = ({
  todo,
  closeModal,
}) => {
  const router = useRouter();

  const handleDeleteTodo = async () => {
    await deleteTodoById(todo.id);
    closeModal();
    router.refresh();
  };
  return (
    <div>
      <h1 className="text-center text-2xl mb-4">Are you sure?</h1>
      <div className="flex justify-around">
        <button
          onClick={handleDeleteTodo}
          className="btn btn-outline border-error"
        >
          Delete
        </button>
        <button
          onClick={() => closeModal()}
          className="btn btn-outline border-success"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
