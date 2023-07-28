interface IEditTodoForm {
  closeModal: () => void;
  todo: ITodo;
}
import React, { useState, ReactEventHandler } from "react";
import { postTodo, updateTodo } from "@/api/todos";
import { ITodo } from "@/types/todo";
import { useRouter } from "next/navigation";
export const EditTodoForm: React.FC<IEditTodoForm> = ({ closeModal, todo }) => {
  const router = useRouter();
  const { id, text, finished } = todo;
  const [textValue, setTextValue] = useState(text);
  const handleSubmitNewTodo: ReactEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newTodo: ITodo = { id, text: textValue, finished };
    await updateTodo(newTodo);
    closeModal();
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmitNewTodo} className="flex flex-col gap-3">
      <label htmlFor="newTodo" className="text-2xl">
        Edit Todo
      </label>
      <div className="flex gap-3">
        <input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Type here"
          className="input w-full max-w-full"
        />
        <button
          type="submit"
          className="btn btn-outline border-neutral-content"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
