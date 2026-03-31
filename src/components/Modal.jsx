import React from "react";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../utils/rewardModalSlice";

const Modal = () => {
  const isOpen = useSelector((store) => store.rewardModal.isOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;
  return createPortal(
    <div
      className="fixed inset-0 bg-black/17 backdrop-blur-xs"
      onClick={handleCloseModal}
    >
      <ModalContent />
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
