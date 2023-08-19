import { NotesHeader } from "./NotesHeader";
import { NotesList } from "./NotesList";

export const Notes = () => {
  return (
    <div className="w-full max-w-4xl py-5 px-3 bg-base-200 rounded-md shadow-md">
      <NotesHeader />
      <NotesList />
    </div>
  );
};
