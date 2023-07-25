interface IEditModal {
  task: ITask;
  modalOpen: boolean;
  toggleModalHandler: () => void;
}
import { ITask } from "@/types/tasks";
import React, { FormEventHandler, ReactEventHandler, useState } from "react";
import { Modal } from "./Modal";
import { updateTask } from "@/api";
import { useRouter } from "next/navigation";

export const EditModal: React.FC<IEditModal> = ({
  task,
  modalOpen,
  toggleModalHandler,
}) => {
  const router = useRouter();
  const [taskValue, setTaskValue] = useState(task.task);
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateTask({ task: taskValue, id: task.id });
    toggleModalHandler();
    router.refresh();
  };
  return (
    <Modal modalOpen={modalOpen} closeModal={toggleModalHandler}>
      <form onSubmit={handleFormSubmit}>
        <h3 className="font-bold text-lg">Add New Task</h3>
        <div className="modal-action">
          <input
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            type="text"
            placeholder={taskValue}
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
