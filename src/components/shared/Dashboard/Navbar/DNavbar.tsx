import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo.png";

const DNavbar = () => {
  return (
    <div className="bg-neutral text-neutral-content px-20 flex items-center justify-between ">
      <div >
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="h-[50px] w-[150px]" src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="text-black">
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li className="text-black">
              <a>Settings</a>
            </li>
            <li className="text-black">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DNavbar;
