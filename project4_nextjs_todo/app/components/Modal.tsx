interface IModal {
  modalOpen: boolean;
  closeModal: () => void;
}
import React from "react";

export const Modal: React.FC<IModal> = ({ modalOpen, closeModal }) => {
  return (
    <dialog
      id="my_modal_2"
      className={`modal ${modalOpen ? "modal-open" : ""}`}
    >
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => closeModal()}>close</button>
      </form>
    </dialog>
  );
};
