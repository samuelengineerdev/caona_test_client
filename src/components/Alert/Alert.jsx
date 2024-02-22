import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
const AlertComponent = ({ alertInfo, handleOpenAlertComponent }) => {
  const { openAlert, message, title, mode, onConfirm, event } = alertInfo;
  // useEffect(() => {
  //   console.log(alertInfo);
  // }, [openAlert]);

  const alertStyle = [
    {
      mode: "DANGER",
      icon: "fa-solid fa-triangle-exclamation text-7xl text-red-600",
      color: "red"
    },
  ].find((style) => style.mode === mode);

   const handleOnConfirm = () => {
    onConfirm(alertInfo)
    handleOpenAlertComponent()
   }

  return (
    <>
      <Dialog open={openAlert} handler={handleOpenAlertComponent}>
        <DialogHeader className="justify-center items-center pt-10">
          <div className="flex flex-col justify-center items-center">
            <i className={alertStyle?.icon}></i>
            <Typography className="text-center text-3xl mt-5">{title || ""} </Typography>
          </div>
        </DialogHeader>
        <DialogBody className="">
            <Typography className="text-center text-2xl ">{message || ""}</Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenAlertComponent}
            className={`mr-1 ${event == "DELETE" ? "" : "hidden"}`}
          >
            <span>Cancelar</span>
          </Button>
          <Button
            variant="gradient"
            color={alertStyle?.color}
            onClick={() =>  event == "DELETE" ? handleOnConfirm() : handleOpenAlertComponent()}
          >
            <span>{event == "DELETE" ? "Delete" : "Aceptar"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AlertComponent;
