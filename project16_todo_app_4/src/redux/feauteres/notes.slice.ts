import { createSlice } from "@reduxjs/toolkit";
import { INotes, INote } from "../../types/notes.t";
const initialState: INotes = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const noteData: INote = action.payload;
      console.log(noteData);
      state.notes.push(noteData);
      console.log(state.notes);
    },
    updateNote: (state, action) => {
      const updatedNote: INote = action.payload;
      state.notes = state.notes.map((note) => {
        if (note._id === updatedNote._id) {
          note = { ...updatedNote };
        }
        return note;
      });
    },
  },
});

export const { addNote, updateNote } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;
