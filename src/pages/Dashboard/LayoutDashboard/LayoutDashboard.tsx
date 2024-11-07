import { Outlet } from "react-router-dom";
import DNavbar from "../../../components/shared/Dashboard/Navbar/DNavbar";
import Sidebar from "../../../components/shared/Dashboard/Sidebar/Sidebar";


const LayoutDashboard = () => {
    return (
        <div>
            <DNavbar/>
            <div className="flex">
                <div className="w-[25%]">
                    <Sidebar/>
                </div>
                <div className="w-[75%] px-4 py-10">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default LayoutDashboard;