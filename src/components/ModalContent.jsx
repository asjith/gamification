import React from "react";
import ModalForm from "./ModalForm";
import ModalControl from "./ModalControl";

const ModalContent = () => {
  return (
    <div
      className="absolute top-41.5 left-140  bg-white rounded-12 p-6 flex flex-col gap-6 shadow-xl"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <ModalForm />
      <ModalControl />
    </div>
  );
};

export default ModalContent;
