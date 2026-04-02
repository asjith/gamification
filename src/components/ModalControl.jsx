import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../utils/rewardModalSlice";
import ModalButton from "./ModalButton";

const ModalControl = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <div className="flex gap-4 h-10">
      <ModalButton
        content="Cancel"
        btnStyle="border border-border"
        contentStyle="text-text"
      />
      <ModalButton
        content="Create Reward"
        btnStyle="bg-magenta-10"
        contentStyle="text-white"
      />
    </div>
  );
};

export default ModalControl;
