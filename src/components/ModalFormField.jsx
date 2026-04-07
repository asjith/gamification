import React from "react";
import arrow from "../icons/Arrows.png";
import { useDispatch, useSelector } from "react-redux";
import { clearActiveField, setActiveField } from "../utils/rewardModalSlice";
import ModalFormDropdown from "./ModalFormDropdown";

const ModalFormField = ({ field }) => {
  const dispatch = useDispatch();
  const activeFieldId = useSelector((store) => store.rewardModal.activeFieldId);

  const handleOpenField = (e, fieldId) => {
    if (activeFieldId && activeFieldId === fieldId) {
      dispatch(clearActiveField());
    } else {
      dispatch(setActiveField(fieldId));
    }
  };

  const isSelected = activeFieldId === field.id;

  return (
    <div className="relative flex flex-col gap-2">
      <p className="font-normal text-sm leading-[1.4] text-text-secondary">
        {field.fieldName} <span className="ml-0.5 text-red-12">*</span>
      </p>
      <button
        className={`h-10 p-2.5 rounded-8 border cursor-pointer flex items-center justify-between  ${isSelected ? "border-2 border-magenta-12 " : " border-border hover:border-border-hover"}`}
        type="button"
        onClick={(e) => handleOpenField(e, field.id)}
      >
        <span
          className={`font-inter font-normal text-base leading-[1.4] ${field.fieldValue === "" ? "text-text-disabled" : "text-text"} `}
        >
          {field.fieldValue === "" ? field.placeholder : field.fieldValue}
        </span>
        <img
          className={`w-6 h-6 transition-transform duration-300 ease-out ${isSelected ? "scale-y-[-1]" : ""}`}
          src={arrow}
        ></img>
      </button>
      {isSelected && <ModalFormDropdown field={field} />}
    </div>
  );
};

export default ModalFormField;
