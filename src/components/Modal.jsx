import React from "react";
import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div
      className="fixed inset-0 bg-black/17 backdrop-blur-xs"
      onClick={handleClose}
    >
      <ModalContent handleClose={handleClose} />
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
