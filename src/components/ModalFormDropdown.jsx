import React from "react";
import ModalFormDropdownOption from "./ModalFormDropdownOption";
import ModalButton from "./ModalButton";
import { useDispatch, useSelector } from "react-redux";
import {
  clearActiveField,
  clearActiveOption,
  setFieldValue,
  updateSaveBtnStatus
} from "../utils/rewardModalSlice";
import { SAVE_BTN_STATUS } from "../utils/constants";

const ModalFormDropdown = ({ field }) => {
  const saveBtnStatus = useSelector((store) => store.rewardModal.saveBtnStatus);
  const selectedOption = useSelector(
    (store) => store.rewardModal.activeOptionId
  );
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(setFieldValue());
    reset();
  };

  const handleCancel = () => {
    reset();
  };

  const reset = () => {
    dispatch(clearActiveField());
    dispatch(clearActiveOption());
    dispatch(updateSaveBtnStatus(SAVE_BTN_STATUS.DISABLE));
  };

  return (
    <div className="absolute z-10 top-full flex flex-col gap-2 bg-white p-1 rounded-8 border border-border shadow-md w-full animate-fade-in">
      <ul>
        {field?.options.map((option) => {
          return <ModalFormDropdownOption key={option.id} option={option} />;
        })}
      </ul>
      {selectedOption && (
        <div className="flex gap-2 h-10">
          <ModalButton
            content="Cancel"
            role="cancel"
            enable={true}
            handleClick={handleCancel}
          />
          <ModalButton
            content="Save"
            role="action"
            enable={saveBtnStatus === SAVE_BTN_STATUS.ENABLE}
            handleClick={handleSave}
          />
        </div>
      )}
    </div>
  );
};

export default ModalFormDropdown;
