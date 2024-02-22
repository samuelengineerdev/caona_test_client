import React from "react";
import { Typography } from "@material-tailwind/react";

export default function NavbarDefault() {

  return (
    <div className="w-full rounded-none ">
      <div className="container py-5 min-w-full flex items-center justify-center ">
        <Typography className="font-inter font-normal text-sm capitalize">
          <span className="opacity-80 text-center">Technical Test</span>{" "}
        </Typography>
      </div>
    </div>
  );
}
