import React from "react";
import closeIcon from "../icons/Close.png";
import { MODAL_FORM_FIELDS } from "../utils/constants";
import ModalFormField from "./ModalFormField";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../utils/rewardModalSlice";

const ModalForm = () => {
  const { fieldDetails } = useSelector((store) => store.rewardModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="w-88 flex flex-col gap-4 text-start">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-xl leading-[1.4] text-text">
          Create your reward system
        </h4>
        <button className="w-6 h-6 cursor-pointer" onClick={handleCloseModal}>
          <img src={closeIcon} />
        </button>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {fieldDetails.map((field) => {
          return <ModalFormField key={field.id} field={field} />;
        })}
        <div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm leading-[1.4] text-text">
              Make the reward time bound
            </span>
            <div className="h-7.5 w-7.5 flex justify-center items-center">
              <button className="relative bg-icon-disabled rounded-10 w-7 h-4.5 cursor-pointer ">
                <div className="absolute left-0.5 top-1/2 -translate-y-1/2 w-3.485 h-3.485 rounded-10 bg-white"></div>
              </button>
            </div>
          </div>
          <div>
            <p className="font-inter font-normal text-xs leading-normal text-text-secondary">
              Choose an end date to stop this reward automatically.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
