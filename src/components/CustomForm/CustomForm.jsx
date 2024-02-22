import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";

function CustomForm({ onSubmit, children, buttonName, isSending }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <div className="mt-4 flex justify-end">
        <button type="submit" className="px-4 py-2 bg-color-1 text-white rounded-md w-full md:w-[10%] min-h-[40px] flex justify-center items-center uppercase text-sm font-inter font-normal">
          {isSending ? <Spinner className="h-4 w-4" /> : buttonName}
        </button> 
      </div>
    </form>
  );
}

export default CustomForm;
