import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) state.tasks[index] = action.payload;
    },
  },
});
export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
