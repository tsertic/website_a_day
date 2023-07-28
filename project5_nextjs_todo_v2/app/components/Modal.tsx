import React from "react";
interface IModal {
  showModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({
  showModal,
  closeModal,
  children,
}) => {
  return (
    <div className={`modal ${showModal && "modal-open"} `}>
      <div className="modal-box bg-neutral border-secondary border-[4px]">
        {children}
      </div>
      <div className="modal-backdrop">
        <button onClick={() => closeModal()}>close</button>
      </div>
    </div>
  );
};
