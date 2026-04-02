import React from "react";
import check from "../icons/Check.png";
import ModalInput from "./ModalInput";
import { useDispatch, useSelector } from "react-redux";
import { setActiveOption } from "../utils/rewardModalSlice";

const ModalFormDropdownOption = ({ option }) => {
  const selectedOption = useSelector(
    (store) => store.rewardModal.activeOptionId
  );
  const dispatch = useDispatch();

  const handleOpenOption = (e, optionId) => {
    dispatch(setActiveOption(optionId));
  };

  return (
    <li className="flex flex-col gap-1">
      <button
        className={`h-10 p-2 rounded-8 text-start  cursor-pointer flex justify-between ${selectedOption === option.id ? "bg-magenta-2 text-magenta-12" : "text-text hover:bg-bg-surface-hover transition-colors duration-100 ease-out"}`}
        onClick={(e) => handleOpenOption(e, option.id)}
      >
        <span>{option.optionName}</span>
        {selectedOption === option.id && (
          <img className="w-6 h-6" src={check} />
        )}
      </button>
      {selectedOption === option.id && (
        <div className="flex gap-2">
          {option.inputs.map((inputDetail) => {
            return (
              <ModalInput key={inputDetail.id} inputDetail={inputDetail} />
            );
          })}
        </div>
      )}
    </li>
  );
};

export default ModalFormDropdownOption;
