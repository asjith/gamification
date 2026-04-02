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
      <ModalButton content="Cancel" role="cancel" enable={true} />
      <ModalButton content="Create Reward" role="action" enable={false} />
    </div>
  );
};

export default ModalControl;
