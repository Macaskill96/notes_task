import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory} from "../../interfaces";

const initialState: ICategory[]=[];

const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers: {
        getAll: (state, action:PayloadAction<ICategory[]>) => {
            return action.payload
        }
    }
})

const {actions, reducer: categoryReducer} = categorySlice;

const categoryAction = {
    ...actions, getAll:actions.getAll
}
export {categoryReducer, categoryAction}