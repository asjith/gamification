import React from "react";
import check from "../icons/Check.png";

const ModalFormDropdownOption = ({
  option,
  selectedOption,
  setSelectedOption
}) => {
  return (
    <li className="flex flex-col gap-1">
      <button
        className={`h-10 p-2 rounded-8 text-start  cursor-pointer flex justify-between ${selectedOption === option.id ? "bg-magenta-2 text-magenta-12" : "text-text hover:bg-bg-surface-hover transition-colors duration-100 ease-out"}`}
        onClick={() => setSelectedOption(option.id)}
      >
        <span>{option.optionName}</span>
        {selectedOption === option.id && (
          <img className="w-6 h-6" src={check} />
        )}
      </button>
      {selectedOption === option.id && (
        <div className="h-10 rounded-8 border-2 border-magenta-12 flex gap-1 items-center px-4 py-2">
          <span className="font-inter font-normal text-base leading-[1.4] text-text-secondary">
            $
          </span>
          <input
            className="w-full font-inter font-normal text-base leading-[1.4] text-text-disabled focus:outline-none focus:text-text"
            placeholder="e.g. 100"
          />
        </div>
      )}
    </li>
  );
};

export default ModalFormDropdownOption;
