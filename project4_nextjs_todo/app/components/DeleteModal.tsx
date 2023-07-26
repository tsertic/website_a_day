interface IEditModal {
  task: ITask;
  modalOpen: boolean;
  toggleModalHandler: () => void;
}
import { ITask } from "@/types/tasks";
import React, { FormEventHandler, ReactEventHandler, useState } from "react";
import { Modal } from "./Modal";
import { deleteTask, updateTask } from "@/api";
import { useRouter } from "next/navigation";

export const DeleteModal: React.FC<IEditModal> = ({
  task,
  modalOpen,
  toggleModalHandler,
}) => {
  const router = useRouter();
  const [taskValue, setTaskValue] = useState(task.task);
  const handleDeleteTask = async () => {
    await deleteTask(task.id);
    toggleModalHandler();
    router.refresh();
  };

  return (
    <Modal modalOpen={modalOpen} closeModal={toggleModalHandler}>
      <div>
        <h3 className="font-bold text-lg">Delete task?</h3>
        <div className="modal-action">
          <button onClick={handleDeleteTask} className="btn">
            Yes
          </button>
          <button
            onClick={() => {
              toggleModalHandler();
            }}
            className="btn"
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};
