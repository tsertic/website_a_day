interface IModal {
  children: React.ReactNode;
  showModal: boolean;
  closeModal: () => void;
}
import React from "react";

export const Modal: React.FC<IModal> = ({
  closeModal,
  showModal,
  children,
}) => {
  const handleCloseModal = () => closeModal();
  return (
    <dialog id="my_modal_2" className={`modal ${showModal && "modal-open"}`}>
      <div className="modal-box">{children}</div>
      <div className="modal-backdrop" onClick={handleCloseModal}>
        <button>close</button>
      </div>
    </dialog>
  );
};
