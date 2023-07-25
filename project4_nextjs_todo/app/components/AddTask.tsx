"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "./Modal";
export const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleAddNewTask = () => {
    setModalOpen(!modalOpen);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button onClick={handleAddNewTask} className="btn btn-primary w-full">
        Add New Task<AiOutlinePlus size={20} />
      </button>
      <Modal modalOpen={modalOpen} closeModal={handleCloseModal} />
    </div>
  );
};
