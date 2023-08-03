"use client";
interface ITodoItem {
  todo: ITodo;
}
import { ITodo } from "@/types/todos.t";
import React, { useState } from "react";
import { format } from "date-fns";
import { useMutation, useQueryClient } from "react-query";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { updateTodo } from "@/api/todos.api";
import { Modal } from "../Modal";
import { EditTodo } from "./EditTodo";
import { DeleteTodo } from "./DeleteTodo";
export const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const [showEditTodo, setShowEditTodo] = useState(false);
  const [showDeleteTodo, setShowDeleteTodo] = useState(false);
  const queryClient = useQueryClient();
  const { task, description, due_date, id, completed } = todo;
  const formatedDate = format(new Date(due_date), "dd-MM-yyyy");
  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
  const handleCheckbox = () =>
    updateMutation.mutate({ ...todo, completed: !completed });
  const toggleEditTodo = () => setShowEditTodo(!showEditTodo);
  const toggleDeleteTodo = () => setShowDeleteTodo(!showDeleteTodo);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={completed}
          className="checkbox"
          onChange={handleCheckbox}
        />
      </td>
      <td>
        <div className="mb-3 pb-1 border-b-2 border-b-primary-focus flex justify-between">
          <h4 className="w-fit">{task}</h4>
          <time>Due: {formatedDate}</time>
        </div>
        <p>{description}</p>
      </td>
      <td className="flex justify-between mt-3 gap-2">
        <AiOutlineEdit cursor="pointer" size={20} onClick={toggleEditTodo} />
        <AiOutlineDelete
          cursor="pointer"
          size={20}
          onClick={toggleDeleteTodo}
        />
        <Modal closeModal={toggleEditTodo} showModal={showEditTodo}>
          <EditTodo todo={todo} closeModal={toggleEditTodo} />
        </Modal>
        <Modal closeModal={toggleDeleteTodo} showModal={showDeleteTodo}>
          <DeleteTodo todo={todo} closeModal={toggleDeleteTodo} />
        </Modal>
      </td>
    </tr>
  );
};
