"use client";
import { ITask } from "@/types/tasks";
import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { EditModal } from "./EditModal";
import { DeleteModal } from "./DeleteModal";

export const Task: React.FC<{ task: ITask }> = ({ task }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleEditModal = () => setEditModalOpen(!editModalOpen);
  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);
  return (
    <>
      <tr>
        <td>{task.id}</td>
        <td className="w-full">{task.task}</td>
        <td className="flex flex-row gap-3 ">
          <AiFillEdit
            onClick={toggleEditModal}
            className="cursor-pointer text-blue-600"
            size={18}
          />
          <AiFillDelete
            onClick={toggleDeleteModal}
            className="cursor-pointer text-red-600"
            size={18}
          />
        </td>
      </tr>

      <EditModal
        task={task}
        modalOpen={editModalOpen}
        toggleModalHandler={toggleEditModal}
      />
      <DeleteModal
        task={task}
        modalOpen={deleteModalOpen}
        toggleModalHandler={toggleDeleteModal}
      />
    </>
  );
};
