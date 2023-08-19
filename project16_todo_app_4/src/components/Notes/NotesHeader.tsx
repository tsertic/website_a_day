import { AddNote } from "./AddNote";

export const NotesHeader = () => {
  return (
    <div className="w-full">
      <h1 className="text-center text-3xl text-primary uppercase mb-4">
        Notes
      </h1>
      <AddNote />
    </div>
  );
};
