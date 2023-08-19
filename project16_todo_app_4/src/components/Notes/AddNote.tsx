import { ReactEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/feauteres/notes.slice";
import { v4 as uuid } from "uuid";
import { INote } from "../../types/notes.t";
export const AddNote = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleFormSubmit: ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (text === "") return;
    const newNote: INote = {
      text,
      _id: uuid(),
      completed: false,
    };

    dispatch(addNote(newNote));
    console.log("TEST");
    setText("");
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full flex gap-5 justify-around"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 rounded-md outline-primary"
      />
      <button
        className="btn btn-outline outline-primary border-primary hover:bg-primary hover:text-primary-content"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
