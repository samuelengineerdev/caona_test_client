import { Outlet } from "react-router";
import { Login } from "../pages/Index";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const auth = useSelector((state) => state.auth);
  return auth.isAuthenticated ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
