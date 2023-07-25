interface IModal {
  modalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
import React from "react";

export const Modal: React.FC<IModal> = ({
  modalOpen,
  closeModal,
  children,
}) => {
  return (
    <dialog
      id="my_modal_2"
      className={`modal ${modalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => closeModal()}>close</button>
      </form>
    </dialog>
  );
};
