import { Typography } from "@material-tailwind/react";
import React from "react";

const CustomModal = ({ isOpen, onClose, children, title, size }) => {
  if (!isOpen) return;

  const sizes = {
    sm: "md:max-w-sm",
    md: "md:max-w-md",
    lg: "md:max-w-lg",
    xl: "md:max-w-xl",
    ["2xl"]: "md:max-w-2xl",
    ["3xl"]: "md:max-w-3xl",
    ["4xl"]: "md:max-w-4xl",
    ["5xl"]: "md:max-w-5xl",
    ["6xl"]: "md:max-w-6xl",
    ["7xl"]: "md:max-w-7xl",
  };

  return (
    <div className="modal fixed inset-0 flex flex-col items-center justify-center z-20">
      {/* <div className="modal-overlay absolute inset-0 bg-black opacity-50" onClick={onClose}></div> */}
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className={`modal-container bg-white w-11/12 ${sizes[size]} mx-auto rounded shadow-lg z-50 overflow-y-auto`}>
        <div className="flex items-center border-b-2 px-5 py-4 bg-color-1 sticky top-0 z-30 text-white">
          <Typography className="text-center w-full uppercase font-normal font-inter">{title}</Typography>
          <i className="fa-solid fa-xmark text-lg hover:text-red-800 cursor-pointer " onClick={onClose}></i>
        </div>
        <div className="modal-content pb-4 text-left px-6 overflow-y-auto " style={{ maxHeight: "calc(100vh - 6rem)" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
