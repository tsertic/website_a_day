import React from "react";
interface IModal {
  children: React.ReactNode;
  tglModal: () => void;
  showModal: boolean;
}
export const Modal: React.FC<IModal> = ({ showModal, children, tglModal }) => {
  return (
    <dialog id="my_modal_2" className={`modal ${showModal && "modal-open"}`}>
      <form method="dialog" className="modal-box">
        {children}
      </form>
      <form method="dialog" className="modal-backdrop" onClick={tglModal}>
        <button>close</button>
      </form>
    </dialog>
  );
};
