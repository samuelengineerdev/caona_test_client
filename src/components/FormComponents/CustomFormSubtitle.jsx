import { Typography } from "@material-tailwind/react";
import React from "react";

function CustomFormSubtitle({ Title, textClass, containerClass }) {
  return (
    <div className={`${containerClass} w-full pb-2 mt-4`}>
      <Typography className={`${textClass} font-inter font-semibold`}>{Title}</Typography>
    </div>
  );
}

export default CustomFormSubtitle;
