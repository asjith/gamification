import React, { useState } from "react";
import ModalFormDropdownOption from "./ModalFormDropdownOption";
import ModalButton from "./ModalButton";

const ModalFormDropdown = ({ field }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="absolute z-10 top-full flex flex-col gap-2 bg-white p-1 rounded-8 border border-border shadow-md w-full animate-fade-in">
      <ul>
        {field?.options.map((option) => {
          return (
            <ModalFormDropdownOption
              key={option.id}
              option={option}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          );
        })}
      </ul>
      {selectedOption && (
        <div className="flex gap-2 h-10">
          <ModalButton
            content="Cancel"
            btnStyle="border border-border"
            contentStyle="text-text"
          />
          <ModalButton
            content="Save"
            btnStyle="bg-magenta-10"
            contentStyle="text-white"
          />
        </div>
      )}
    </div>
  );
};

export default ModalFormDropdown;
