import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateOptionInput,
  updateSaveBtnStatus
} from "../utils/rewardModalSlice";
import { SAVE_BTN_STATUS } from "../utils/constants";

const ModalInput = ({ inputDetail }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (input === "") return;
    dispatch(updateSaveBtnStatus(SAVE_BTN_STATUS.ENABLE));

    return () => {
      dispatch(updateSaveBtnStatus(SAVE_BTN_STATUS.DISABLE));
    };
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleBlur = () => {
    const newInput = { ...inputDetail, value: input };
    dispatch(updateOptionInput(newInput));
  };

  return (
    <div className="h-10 rounded-8 border-2 border-magenta-12 flex gap-1 items-center px-4 py-2 w-full">
      <span className="font-inter font-normal text-base leading-[1.4] text-text-secondary">
        $
      </span>
      <input
        className="w-full font-inter font-normal text-base leading-[1.4] text-text focus:outline-none"
        placeholder="e.g. 100"
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default ModalInput;
