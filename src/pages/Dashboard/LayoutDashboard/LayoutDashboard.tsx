import { Outlet } from "react-router-dom";
import DNavbar from "../../../components/shared/Dashboard/Navbar/DNavbar";
import Sidebar from "../../../components/shared/Dashboard/Sidebar/Sidebar";
import TokenBasePrivateRoute from "../../../router/PrivateRoute/TokenBasePrivateRoute";

const LayoutDashboard = () => {
  return (
    <>
      <TokenBasePrivateRoute>
        <DNavbar />
        <div className="flex h-full">
          <div className="hidden lg:block w-[25%] min-h-screen">
            <Sidebar />
          </div>
          <div className="w-full lg:w-[75%]  px-4 py-10">
            <Outlet />
          </div>
        </div>
      </TokenBasePrivateRoute>
    </>
  );
};

export default LayoutDashboard;
