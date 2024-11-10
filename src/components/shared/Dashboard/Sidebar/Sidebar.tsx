import { Link, useLocation } from "react-router-dom";
import {
  currentToken,
  currentUser,
  logOut,
} from "../../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { TokenDecoder } from "../../../../utils/decode";
const Sidebar = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  // console.log("currentPathname", currentPathname);
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(currentUser);
  const token: string | null = useAppSelector(currentToken);
  const { userRole } = TokenDecoder(token as string);
  // console.log("tokenUser", tokenUser);
  return (
    <>
      <div className="bg-gray-500 w-full h-full">
        <div>
          <div className="flex items-center justify-center">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt=""
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className="text-center text-white">
            <h1 className="text-lg font-bold">{userInfo?.name}</h1>
            <p className="text-sm">{userInfo?.role}</p>
          </div>
        </div>
        <div className="divider">OR</div>
        <div className="w-full px-4">
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  to={`/dashboard/${userRole}`}
                  className={`block rounded text-white p-2 hover:bg-gray-600 ${
                    currentPathname === `/dashboard/${userRole}`
                      ? "bg-blue-400"
                      : ""
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              {userRole === "admin" ? (
                <>
                  <li>
                    <Link
                      to={`/dashboard/${userRole}/facility`}
                      className={`block rounded text-white p-2 hover:bg-gray-600 ${
                        currentPathname === `/dashboard/${userRole}/facility`
                          ? "bg-blue-400"
                          : ""
                      }`}
                    >
                      Facility
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/dashboard/${userRole}/admin`}
                      className={`block rounded text-white p-2 hover:bg-gray-600 ${
                        currentPathname === `/dashboard/${userRole}/admin`
                          ? "bg-blue-400"
                          : ""
                      }`}
                    >
                      Admin
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a
                      href="#"
                      className="block text-white p-2 hover:bg-gray-600"
                    >
                      User
                    </a>
                  </li>
                </>
              )}

              <li>
                <a
                  onClick={() => {
                    dispatch(logOut());
                  }}
                  className="block text-white p-2 hover:bg-gray-600 cursor-pointer"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
