import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {archiveReducer, categoryReducer, countReducer, notesReducer} from "./slice";
import {arcCountReducer} from "./slice/archiveCounerSlice";

const rootReducer = combineReducers({
    notesReducer, categoryReducer, countReducer, archiveReducer, arcCountReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}