import React from "react";
interface IModal {
  children: React.ReactNode;
  tglModal: () => void;
  showModal: boolean;
}
export const Modal: React.FC<IModal> = ({ showModal, children, tglModal }) => {
  return (
    <div id="my_modal_2" className={`modal ${showModal && "modal-open"}`}>
      <div className="modal-box">{children}</div>
      <form method="dialog" className="modal-backdrop" onClick={tglModal}>
        <button>close</button>
      </form>
    </div>
  );
};
