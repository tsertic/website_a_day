interface IModal {
  children: React.ReactNode;
  showModal: boolean;
  closeModal: () => void;
}
import React from "react";

export const Modal: React.FC<IModal> = ({
  children,
  showModal,
  closeModal,
}) => {
  const handleCloseModal = () => closeModal();
  return (
    <dialog className={`modal ${showModal && "modal-open"}`}>
      <div className="modal-box">{children}</div>
      <div
        onClick={handleCloseModal}
        className="modal-backdrop bg-black/60 cursor-pointer"
      ></div>
    </dialog>
  );
};
