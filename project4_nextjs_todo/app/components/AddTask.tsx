"use client";

import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "./Modal";
import { postNewTask } from "@/api";
import { useRouter } from "next/navigation";
export const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const handleAddNewTask = () => {
    setModalOpen(!modalOpen);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const newTodo = await postNewTask(taskValue);
    setTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button onClick={handleAddNewTask} className="btn btn-primary w-full">
        Add New Task
        <AiOutlinePlus size={20} />
      </button>
      <Modal modalOpen={modalOpen} closeModal={handleCloseModal}>
        <form onSubmit={handleFormSubmit}>
          <h3 className="font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
