import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../feature/feedbackSlice";


const store = configureStore({
    reducer: {
        feedback: feedbackReducer
    }
})

export default store