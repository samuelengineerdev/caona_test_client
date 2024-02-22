import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import busesService from "../../services/buses.service";

function PrintBuses() {
  const [buses, setBuses] = useState([]);
  const [isPrinted, setIsPrinted] = useState(false);

  const getBuses = async () => {
    const data = await busesService.get();
    if (data.status) {
      setBuses(data.buses);
    }
  };

  useEffect(() => {
    getBuses();
  }, []);

  const setPrintOrientation = (orientation) => {
    var css = "@page { size: " + orientation + "; }",
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");
    style.type = "text/css";
    style.media = "print";
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  };

  const checkToPrint = () => {
    const orientation = "portrait";
    setPrintOrientation(orientation);
    if (!isPrinted) window.print();
  };

  useEffect(() => {
    if (buses && !isPrinted) {
      setIsPrinted(true);
      setTimeout(() => {
        checkToPrint();
      }, 1000);
    }
  }, [buses]);

  const TABLE_HEAD = [
    "No.",
    "Bus Plate",
    "VIN",
    "Color",
    "Brand",
    "Mile",
    "Year",
    "Passenger",
    "Oil Date",
    "Status",
  ];

  return (
    <div className="max-w-full overflow-none">
    <Card className="min-w-max text-left">
      <table>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border border-black p-1"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold font-inter leading-none "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {buses.map(
            (
              {
                id,
                bus_plate,
                vin,
                color,
                brand,
                mile,
                year,
                passenger,
                oil_date,
                status,
              },
              index
            ) => {
              const isLast = index === buses.length - 1;
              const classes = isLast
                ? "p-1 border border-black"
                : "p-1 border border-black";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {bus_plate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {vin}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {color}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {brand}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {mile}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {year?.split("-")[0]}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {passenger}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {oil_date}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal font-inter text-[#16191b]"
                    >
                      {status?.name}
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  </div>
  );
}

export default PrintBuses;
