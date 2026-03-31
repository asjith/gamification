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
    }
  }
});

export const { openModal, closeModal } = rewardModalSlice.actions;
export default rewardModalSlice.reducer;
