import React from "react";
import { INote } from "../../types/notes.t";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
interface INoteItem {
  note: INote;
}
export const NoteItem: React.FC<INoteItem> = ({ note }) => {
  const dispatch = useDispatch();
  const { text, _id, completed } = note;
  const tglCompletedHandler = () => {};
  return (
    <tr>
      <td className={`w-full cursor-pointer ${completed && "line-through"}`}>
        {text}
      </td>
      <td className="flex justify-center gap-3 ">
        <AiFillEdit size={18} className="hover:text-primary" />
        <AiFillDelete size={18} className="hover:text-primary" />
      </td>
    </tr>
  );
};
