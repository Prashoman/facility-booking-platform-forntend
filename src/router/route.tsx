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
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute";
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/facility",
        element: <UserFacility />,
      },
      {
        path: "/facility/:facilityId",
        element: <FacilityDetails />,
      },
      {
        path: "/booking/:facilityId",
        element: (
          <UserPrivateRoute>
            <Booking />
          </UserPrivateRoute>
        ),
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
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <LayoutDashboard />,
    children: [
      {
        path: "admin",
        element: (
          <AdminPrivateRoute>
            {" "}
            <Welcome />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "admin/facility",
        element: (
          <AdminPrivateRoute>
            <Facility />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "admin/admin",
        element: (
          <AdminPrivateRoute>
            <Admin />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "admin/add",
        element: (
          <AdminPrivateRoute>
            <AddAdmin />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "facility/add",
        element: (
          <AdminPrivateRoute>
            <AddFacility />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "facility/edit/:facilityId",
        element: (
          <AdminPrivateRoute>
            <EditFacility />
          </AdminPrivateRoute>
        ),
      },

      {
        path: "admin/all-bookings",
        element: (
          <AdminPrivateRoute>
            <AllBookings />
          </AdminPrivateRoute>
        ),
      },

      // user route start
      {
        path: "user",
        element: (
          <UserPrivateRoute>
            {" "}
            <Welcome />{" "}
          </UserPrivateRoute>
        ),
      },
      {
        path: "user/my-bookings",
        element: (
          <UserPrivateRoute>
            <MyBookings />
          </UserPrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
