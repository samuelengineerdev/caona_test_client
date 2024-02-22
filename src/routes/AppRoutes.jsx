import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clients from "../feactures/Clients/Clients";
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="*" element={<Clients />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
