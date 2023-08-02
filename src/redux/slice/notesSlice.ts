import {INotes} from "../../interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: INotes[] = [];

const notesSlice = createSlice({
    name:'notes',
    initialState,
    reducers: {
        getAll: (state, action:PayloadAction<INotes[]>) => {
            return action.payload;
        },
        createNote: (state:INotes[], action:PayloadAction<INotes>) => {
            state.push(action.payload)
        },
        removeNote: (state, action:PayloadAction<number>) => {
          state.splice(action.payload, 1)
        },
        updateNote: (state, action: PayloadAction<{ index: number; updatedNote: INotes }>) => {
            const { index, updatedNote } = action.payload;
            state[index] = updatedNote;
        },
    }
})

const {actions, reducer: notesReducer} = notesSlice;

const notesAction = {
    ...actions, createNote: actions.createNote, removeNote: actions.removeNote, setAll:actions.getAll, updateNote: actions.updateNote
}

export {notesReducer, notesAction}
