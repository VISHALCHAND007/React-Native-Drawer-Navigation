import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

// to infer type
export type RootState = ReturnType<typeof store.getState>

