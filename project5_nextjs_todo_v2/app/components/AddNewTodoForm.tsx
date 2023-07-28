interface IAddNewTodoForm {
  closeModal: () => void;
}
import { postTodo } from "@/api/todos";
import { ITodo } from "@/types/todo";
import React, { useState, ReactEventHandler } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
export const AddNewTodoForm: React.FC<IAddNewTodoForm> = ({ closeModal }) => {
  const router = useRouter();
  const [textValue, setTextValue] = useState("");
  const handleSubmitNewTodo: ReactEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newTodo: ITodo = { id: uuid(), text: textValue, finished: false };
    await postTodo(newTodo);
    setTextValue("");
    closeModal();
    router.refresh();
  };
  return (
    <form onSubmit={handleSubmitNewTodo} className="flex flex-col gap-3">
      <label htmlFor="newTodo" className="text-2xl">
        Add New Todo
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
          Add
        </button>
      </div>
    </form>
  );
};
