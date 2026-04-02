import React from "react";
import { assignStyle } from "../utils/helperFunctions";

const ModalButton = ({ content, role, enable, handleClick = () => {} }) => {
  const [btnStyle, contentStyle] = assignStyle(role, enable);

  return (
    <button
      className={`flex-1 px-4 py-2 rounded-10 flex justify-center items-center cursor-pointer ${btnStyle}`}
      type="button"
      onClick={handleClick}
    >
      <span
        className={`font-inter font-normal text-base leading-[1.4] ${contentStyle}`}
      >
        {content}
      </span>
    </button>
  );
};

export default ModalButton;
