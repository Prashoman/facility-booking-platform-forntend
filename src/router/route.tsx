import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
 import LayoutDashboard from "../pages/Dashboard/LayoutDashboard/LayoutDashboard";
import Welcome from "../pages/Dashboard/common/Welcome/Welcome";
import Facility from "../pages/Dashboard/Admin/Facility/Facility";
import AddFacility from "../pages/Dashboard/Admin/Facility/AddFacility";
import EditFacility from "../pages/Dashboard/Admin/Facility/EditFacility";
import Admin from "../pages/Dashboard/Admin/AdminMang/Admin";
import AddAdmin from "../pages/Dashboard/Admin/AdminMang/AddAdmin";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <LayoutDashboard />,
    children: [
      {
        path: "admin",
        element: <Welcome/>,
      },
      {
        path: "admin/facility",
        element: <Facility/>,
      },
      {
        path: "admin/admin",
        element: <Admin/>,
      },
      {
        path: "admin/add",
        element: <AddAdmin/>,
      },
      {
        path: "facility/add",
        element: <AddFacility/>,
      },
      {
        path: "facility/edit/:facilityId",
        element: <EditFacility/>,
      },
      {
        path: "user",
        element: <Welcome/>,
      },
    ],
  },
]);

export default router;
