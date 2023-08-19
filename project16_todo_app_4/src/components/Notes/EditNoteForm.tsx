interface IEditNoteForm {
  note: INote;
  closeModal: () => void;
}
import React, { ReactEventHandler, useState } from "react";
import { INote } from "../../types/notes.t";
import { useDispatch } from "react-redux";
import { updateNote } from "../../redux/feauteres/notes.slice";
export const EditNoteForm: React.FC<IEditNoteForm> = ({ note, closeModal }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(note.text);

  const formHandler: ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (text === "") return;
    if (text === note.text) {
      closeModal();
      return;
    }
    const updatedNote = { ...note, text };
    dispatch(updateNote(updatedNote));

    closeModal();
  };
  return (
    <form onSubmit={formHandler}>
      <h1 className="text-center text-xl mb-4 text-primary">Edit Note</h1>
      <div className="flex gap-2">
        <input
          className="border-2 p-2 rounded-md w-full"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-outline border-primary ">
          Edit
        </button>
      </div>
    </form>
  );
};
