import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: { status: "all", priority: "all" },
  sortBy: "date",
  isLoading: false
};

const slicer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.tasks.push({
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority || "low",
        status: action.payload.status || "todo",
        createdAt: Date.now(),
      });
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    changeStatus: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    loadInitial: (state, action) => {
      return action.payload;
    },
  },
});

export const { createTask, updateTask, deleteTask, changeStatus, setFilter, setSort, loadInitial } = slicer.actions;
export default slicer.reducer;