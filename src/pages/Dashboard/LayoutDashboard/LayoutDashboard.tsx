import { Outlet } from "react-router-dom";
import DNavbar from "../../../components/shared/Dashboard/Navbar/DNavbar";
import Sidebar from "../../../components/shared/Dashboard/Sidebar/Sidebar";
import TokenBasePrivateRoute from "../../../router/PrivateRoute/TokenBasePrivateRoute";

const LayoutDashboard = () => {
  return (
    <>
      <TokenBasePrivateRoute>
        <DNavbar />
        <div className="flex">
          <div className="w-[25%]">
            <Sidebar />
          </div>
          <div className="w-[75%] px-4 py-10">
            <Outlet />
          </div>
        </div>
      </TokenBasePrivateRoute>
    </>
  );
};

export default LayoutDashboard;
