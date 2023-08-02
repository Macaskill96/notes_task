import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotes } from "../../interfaces";

const initialState: INotes[] = [];

const categorySlice = createSlice({
    name: 'archived',
    initialState,
    reducers: {
        getAll: (state, action: PayloadAction<INotes[]>) => {
            return action.payload;
        },
        setNote: (state, action: PayloadAction<{ index: number, note: INotes }>) => {
            const { index, note } = action.payload;
            state[index] = note;
        },
        removeNote: (state, action:PayloadAction<number>) => {
            state.splice(action.payload, 1)
        },
    }
});

const { actions, reducer: archiveReducer } = categorySlice;

const archiveAction = {
    ...actions,
    getAll: actions.getAll,
    setNote: actions.setNote,
    removeNote:actions.removeNote
};

export { archiveReducer, archiveAction };
