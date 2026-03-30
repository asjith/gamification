import React from "react";
import arrow from "../icons/Arrows.png";

const ModalFormField = ({ field }) => {
  return (
    <label className="flex flex-col gap-2">
      <p className="font-normal text-sm leading-[1.4] text-text-secondary">
        {field.name} <span className="ml-0.5 text-red-12">*</span>
      </p>
      <button
        className="h-10 p-2.5 rounded-8 border border-border cursor-pointer flex items-center justify-between"
        type="button"
      >
        <span className="font-inter font-normal text-base leading-[1.4] text-text-disabled">
          {field.placeholder}
        </span>
        <img className="w-6 h-6" src={arrow}></img>
      </button>
    </label>
  );
};

export default ModalFormField;
