import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: (() => {
    try {
      const saved = JSON.parse(localStorage.getItem("pastes"));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  })(),
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Notes created successfully");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Notes updated successfully");
      }
    },

    resetToPaste: (state, action) => {
        state.pastes = [];

        localStorage.removeItem("pastes");
    },

    removeTopaste: (state, action) => {
      const pasteId = action.payload;

      console.log(pasteId);
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) state.pastes.splice(index, 1);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Notes deleted successfully");
    },
  },
});

export const { addToPaste, updateToPaste, resetToPaste, removeTopaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
