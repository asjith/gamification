import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../utils/rewardModalSlice";

const ModalControl = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div className="flex gap-4 h-10">
      <button
        className="flex-1 px-4 py-2 rounded-10 border border-border flex justify-center items-center cursor-pointer"
        type="button"
        onClick={handleCloseModal}
      >
        <span className="font-inter font-normal text-base leading-[1.4] text-text">
          Cancel
        </span>
      </button>
      <button
        className="flex-1 px-4 py-2 rounded-10 bg-magenta-10 flex justify-center items-center cursor-pointer"
        type="button"
      >
        <span className="font-inter font-normal text-base leading-[1.4] text-white">
          Create Reward
        </span>
      </button>
    </div>
  );
};

export default ModalControl;
