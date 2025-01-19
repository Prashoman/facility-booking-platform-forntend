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
import AllBookings from "../pages/Dashboard/Admin/AllBookings/AllBookings";
import MyBookings from "../pages/Dashboard/User/MyBookings/MyBookings";
import FacilityDetails from "../pages/FacilityDetails/FacilityDetails";
import Booking from "../pages/Booking/Booking";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import UserFacility from "../pages/Facility/Facility";
import NotFound from "../components/ui/NotFound/NotFound";
import ErrorPage from "../components/ui/ErrorPage/ErrorPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutPage from "../pages/AboutPage/AboutPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/facility",
        element: <UserFacility/>,
      },
      {
        path:"/facility/:facilityId",
        element: <FacilityDetails/>,
      },
      {
        path: "/booking/:facilityId",
        element: <Booking/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:"/payment-success",
        element: <PaymentSuccess/>,
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/about-us",
        element:<AboutPage/>
      }
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
        path: "admin/all-bookings",
        element: <AllBookings/>,
      },

      // user route start
      {
        path: "user",
        element: <Welcome/>,
      },
      {
        path: "user/my-bookings",
        element: <MyBookings/>,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
