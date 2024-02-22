import { Outlet } from "react-router";
import MainLayout from "../layouts/MainLayout";

const PublicRoutes = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default PublicRoutes;
