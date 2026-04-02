import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFieldDetails,
  updateSaveBtnStatus
} from "../utils/rewardModalSlice";
import { SAVE_BTN_STATUS } from "../utils/constants";

const ModalInput = ({ inputDetail }) => {
  const [input, setInput] = useState("");
  const saveBtnStatus = useSelector((store) => store.rewardModal.saveBtnStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (input === "") return;
    dispatch(updateSaveBtnStatus(SAVE_BTN_STATUS.ENABLE));

    return () => {
      dispatch(updateSaveBtnStatus(SAVE_BTN_STATUS.DISABLE));
    };
  }, [input]);

  useEffect(() => {
    if (saveBtnStatus !== SAVE_BTN_STATUS.ACTION) return;
    const newInputDetail = { ...inputDetail };
    for (let key in newInputDetail) {
      if (key !== "id") {
        newInputDetail[key] = input;
      }
    }

    dispatch(
      updateFieldDetails({
        updateInputIndex: inputDetail.id,
        input: newInputDetail
      })
    );
  }, [saveBtnStatus]);

  const handleChange = (e) => {
    setInput(e.target.value);
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
      />
    </div>
  );
};

export default ModalInput;
