import React, { useState } from "react";
import { INote } from "../../types/notes.t";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateNote } from "../../redux/feauteres/notes.slice";
import { Modal } from "../UI/Modal";
import { EditNoteForm } from "./EditNoteForm";
import { DeleteNote } from "./DeleteNote";
interface INoteItem {
  note: INote;
}
export const NoteItem: React.FC<INoteItem> = ({ note }) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { text, _id, completed } = note;
  const tglEditModal = () => setShowEditModal(!showEditModal);
  const tglDeleteModal = () => setShowDeleteModal(!showDeleteModal);
  const tglCompletedHandler = () => {
    console.log("clicked");

    dispatch(updateNote({ ...note, completed: !completed }));
  };
  console.log(note);
  return (
    <tr>
      <td
        onClick={tglCompletedHandler}
        className={`w-full cursor-pointer ${
          completed && "line-through text-success"
        }`}
      >
        {text}
      </td>
      <td className="flex justify-center gap-3 ">
        <AiFillEdit
          onClick={tglEditModal}
          size={18}
          className="hover:text-primary cursor-pointer"
        />
        <AiFillDelete
          onClick={tglDeleteModal}
          size={18}
          className="cursor-pointer hover:text-primary"
        />
        <Modal showModal={showEditModal} tglModal={tglEditModal}>
          <EditNoteForm note={note} closeModal={tglEditModal} />
        </Modal>
        <Modal showModal={showDeleteModal} tglModal={tglDeleteModal}>
          <DeleteNote note={note} closeModal={tglDeleteModal} />
        </Modal>
      </td>
    </tr>
  );
};