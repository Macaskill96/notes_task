import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICounter} from "../../interfaces/counter.interface";



const initialState: ICounter = {
   result:{
       Task:0,
       RandomThought: 0,
       Idea: 0
   }
};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        getAll: (state, action:PayloadAction<ICounter>) => {
            return action.payload
        },
        setCounterResult: (state, action: PayloadAction<ICounter>) => {
            state.result = action.payload.result
        },
    }
})

const {actions, reducer: countReducer} = counterSlice;

const countActions = {
    ...actions, getAll:actions.getAll,
    setCounterResult: actions.setCounterResult,
}

export {countActions, countReducer}