import { Routes, Route } from "react-router-dom";
import { Buses } from "../Index";
import PrintBuses from "../components/PrintBuses/PrintBuses";

const BusesRoutes = () => {
  return (
    <Routes>
      <Route index element={<Buses />} />
      <Route path="print" element={<PrintBuses />} />
    </Routes>
  );
};

export default BusesRoutes;
