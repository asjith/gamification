import { createSlice } from "@reduxjs/toolkit";
import { MODAL_FORM_FIELDS } from "./constants";

const rewardModalSlice = createSlice({
  name: "rewardModal",
  initialState: {
    isOpen: false,
    activeFieldId: null,
    fieldDetails: []
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      state.activeFieldId = null;
      state.fieldDetails = structuredClone(MODAL_FORM_FIELDS);
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.activeFieldId = null;
      state.fieldDetails = [];
    },
    setActiveField: (state, action) => {
      state.activeFieldId = action.payload;
    },
    clearActiveField: (state) => {
      state.activeFieldId = null;
    }
  }
});

export const { openModal, closeModal, setActiveField, clearActiveField } =
  rewardModalSlice.actions;
export default rewardModalSlice.reducer;
