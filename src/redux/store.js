import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slicer";
import { reduxMiddleware } from "./middleware";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reduxMiddleware),
});

try {
    const initial_data = localStorage.getItem("task_data");
    if (initial_data) {
        store.dispatch({ type: "tasks/loadInitial", payload: JSON.parse(initial_data) });
    }
} catch (err) {
    console.error("Could not restore tasks:", err);
}

export default store;
