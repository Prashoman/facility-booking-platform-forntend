import { Outlet } from "react-router-dom";
import DNavbar from "../../../components/shared/Dashboard/Navbar/DNavbar";
import Sidebar from "../../../components/shared/Dashboard/Sidebar/Sidebar";
import TokenBasePrivateRoute from "../../../router/PrivateRoute/TokenBasePrivateRoute";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const LayoutDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  console.log(sidebarOpen);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
    const handleClickOutside = (event: MouseEvent) => {
      
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false); // Close the sidebar if clicked outside
      }
    };

    // Add event listener on component mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <TokenBasePrivateRoute>
        <DNavbar />
        <div className="flex lg:hidden justify-start p-4">
          <FaRegArrowAltCircleRight
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
            className="w-7 h-7"
          />
        </div>
        <div className="flex h-full">
          <div
          ref={sidebarRef}
            className={`lg:hidden fixed top-0 left-0 z-50 w-[80%] min-h-screen bg-white shadow-lg transition-transform duration-300 ${
              sidebarOpen ? "transform-none" : "-translate-x-full"
            }`}
          >
            <Sidebar />
          </div>
          <div className="hidden lg:block w-[20%] min-h-screen bg-white shadow-lg">
          <Sidebar />
        </div>
          <div className="w-full lg:w-[80%]  px-4 py-10">
            <Outlet />
          </div>
        </div>
      </TokenBasePrivateRoute>
    </>
  );
};

export default LayoutDashboard;
