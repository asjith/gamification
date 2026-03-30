import React, { useState } from "react";
import arrow from "../icons/Arrows.png";

const ModalFormField = ({ field }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="relative flex flex-col gap-2">
      <p className="font-normal text-sm leading-[1.4] text-text-secondary">
        {field.fieldName} <span className="ml-0.5 text-red-12">*</span>
      </p>
      <button
        className={`h-10 p-2.5 rounded-8 border cursor-pointer flex items-center justify-between  ${isSelected ? "border-2 border-magenta-12 " : " border-border hover:border-border-hover"}`}
        type="button"
        onClick={() => setIsSelected(!isSelected)}
      >
        <span className="font-inter font-normal text-base leading-[1.4] text-text-disabled">
          {field.placeholder}
        </span>
        <img
          className={`w-6 h-6 transition-transform duration-300 ease-out ${isSelected ? "scale-y-[-1]" : ""}`}
          src={arrow}
        ></img>
      </button>
      {isSelected && (
        <div className="absolute z-10 top-full bg-white p-1 rounded-8 border border-border shadow-md w-full animate-fade-in">
          <ul>
            {field?.options.map((option) => {
              return (
                <li
                  key={option.id}
                  className="h-10 p-2 rounded-8 text-text cursor-pointer hover:bg-bg-surface-hover transition-colors duration-100 ease-out"
                >
                  {option.optionName}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModalFormField;
