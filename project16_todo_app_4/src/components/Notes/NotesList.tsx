import { useSelector } from "react-redux";
import { INotes } from "../../types/notes.t";
import { NoteItem } from "./NoteItem";
export const NotesList = () => {
  const notes = useSelector((state: { notes: INotes }) => state.notes.notes);
  console.log(notes);
  return (
    <div className="overflow-x-auto mt-5">
      {notes && (
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => {
              return <NoteItem key={note._id} note={note} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
