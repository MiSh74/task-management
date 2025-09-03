export const reduxMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    if (action.type.startsWith("tasks/")) {
        try {
            const state = store.getState().tasks;
            localStorage.setItem("task_data", JSON.stringify(state));
        } catch (err) {
            console.error("Could not save tasks:", err);
        }
    }
    return result;
};
