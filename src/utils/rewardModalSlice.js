import { createSlice } from "@reduxjs/toolkit";
import { MODAL_FORM_FIELDS, SAVE_BTN_STATUS } from "./constants";
import { findIndex } from "./helperFunctions";

const rewardModalSlice = createSlice({
  name: "rewardModal",
  initialState: {
    isOpen: false,
    activeFieldId: null,
    activeOptionId: null,
    saveBtnStatus: SAVE_BTN_STATUS.DISABLE,
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
    },
    setActiveOption: (state, action) => {
      state.activeOptionId = action.payload;
    },
    clearActiveOption: (state) => {
      state.activeOptionId = null;
    },
    updateSaveBtnStatus: (state, action) => {
      state.saveBtnStatus = action.payload;
    },
    updateOptionInput: (state, action) => {
      const newInput = action.payload;
      const [fieldIndex, optionIndex] = findIndex(state);

      const inputIndex = state.fieldDetails[fieldIndex].options[
        optionIndex
      ].inputs.findIndex((input) => input.id === newInput.id);

      state.fieldDetails[fieldIndex].options[optionIndex].inputs[inputIndex] = {
        ...newInput
      };
    },
    setFieldValue: (state) => {
      const [fieldIndex, optionIndex] = findIndex(state);
      const option = state.fieldDetails[fieldIndex].options[optionIndex];
      const template = option.displayTemplate;
      let index = 0;

      const updatedTemplate = template.replace(
        /\{[^}]+\}/g,
        () => option.inputs[index++].value
      );
      state.fieldDetails[fieldIndex].fieldValue = updatedTemplate;
    }
  }
});

export const {
  openModal,
  closeModal,
  setActiveField,
  clearActiveField,
  setActiveOption,
  clearActiveOption,
  updateSaveBtnStatus,
  updateOptionInput,
  setFieldValue
} = rewardModalSlice.actions;
export default rewardModalSlice.reducer;
