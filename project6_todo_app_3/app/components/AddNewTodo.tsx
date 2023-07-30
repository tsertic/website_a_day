"use client";
interface IAddNewTodo {
  success: boolean;
}
import React, { useState } from "react";
import { Modal } from "./Modal";
import { NewTodoForm } from "./NewTodoForm";

export const AddNewTodo: React.FC<IAddNewTodo> = ({ success }) => {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const toggleAddTodoModal = () => setShowAddTodoModal(!showAddTodoModal);
  return (
    <>
      <button
        onClick={toggleAddTodoModal}
        className={`btn w-full btn-outline ${!success && "btn-disabled"}`}
      >
        Add New Todo
      </button>
      <Modal showModal={showAddTodoModal} closeModal={toggleAddTodoModal}>
        <NewTodoForm closeModal={toggleAddTodoModal} />
      </Modal>
    </>
  );
};
