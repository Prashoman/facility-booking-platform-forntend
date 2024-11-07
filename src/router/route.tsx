import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
 import LayoutDashboard from "../pages/Dashboard/LayoutDashboard/LayoutDashboard";
import Welcome from "../pages/Dashboard/common/Welcome/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
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
        path: "user",
        element: <Welcome/>,
      },
      
    ],
  },
]);

export default router;
