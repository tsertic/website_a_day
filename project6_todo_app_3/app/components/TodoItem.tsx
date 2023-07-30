"use client";
interface ITodoItem {
  todo: ITodo;
  i: number;
}
import { ITodo } from "@/types/todos";
import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { Modal } from "./Modal";
import { DeleteTodoForm } from "./DeleteTodoForm";
import { EditTodoForm } from "./UpdateTodoForm";
export const TodoItem: React.FC<ITodoItem> = ({ todo, i }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toggleEditModal = () => setShowEditModal(!showEditModal);
  const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
  return (
    <tr>
      <th>{i}</th>
      <td className="w-full">{todo.text}</td>
      <td className="flex gap-3 justify-around">
        <LuFileEdit size={18} cursor="pointer" onClick={toggleEditModal} />
        <MdOutlineDeleteOutline
          size={18}
          cursor="pointer"
          onClick={toggleDeleteModal}
        />
        <Modal showModal={showEditModal} closeModal={toggleEditModal}>
          <EditTodoForm todo={todo} closeModal={toggleEditModal} />
        </Modal>
        <Modal showModal={showDeleteModal} closeModal={toggleDeleteModal}>
          <DeleteTodoForm todo={todo} closeModal={toggleDeleteModal} />
        </Modal>
      </td>
    </tr>
  );
};
