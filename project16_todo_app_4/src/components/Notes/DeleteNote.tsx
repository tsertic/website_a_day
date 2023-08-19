interface IDeleteNote {
  note: INote;
  closeModal: () => void;
}
import React from "react";
import { INote } from "../../types/notes.t";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/feauteres/notes.slice";
export const DeleteNote: React.FC<IDeleteNote> = ({ note, closeModal }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
    closeModal();
  };

  return (
    <div>
      <h1 className="text-center text-xl mb-4 text-primary">Edit Note</h1>
      <div className="flex gap-2 justify-around">
        <button
          className="btn btn-outline border-primary "
          onClick={deleteNoteHandler}
        >
          Delete
        </button>
        <button
          className="btn btn-outline border-primary "
          onClick={closeModal}
        >
          Cancle
        </button>
      </div>
    </div>
  );
};
