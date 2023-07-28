"use client";
interface ITodoItem {
  todo: ITodo;
}
import { updateTodo } from "@/api/todos";
import { ITodo } from "@/types/todo";
import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { EditTodoForm } from "./EditTodoForm";
import { Modal } from "./Modal";
export const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const router = useRouter();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleOpenEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseDeleteModal = () => setShowEditModal(false);
  const handleOpenDeleteModal = () => setShowEditModal(true);
  const handleCheckTodo = async () => {
    await updateTodo({ ...todo, finished: !todo.finished });
    router.refresh();
  };
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            <div className="cursor-pointer label">
              <input
                onClick={handleCheckTodo}
                type="checkbox"
                checked={todo.finished}
                className="checkbox checkbox-success"
              />
            </div>
          </div>
        </td>
        <td className="w-full">{todo.text}</td>
        <td className="flex gap-3 justify-around">
          <AiOutlineEdit
            cursor="pointer"
            size={20}
            onClick={handleOpenEditModal}
          />
          <AiOutlineDelete cursor="pointer" size={20} />
        </td>
      </tr>
      <Modal showModal={showEditModal} closeModal={handleCloseEditModal}>
        <EditTodoForm todo={todo} closeModal={handleCloseEditModal} />
      </Modal>
    </>
  );
};
