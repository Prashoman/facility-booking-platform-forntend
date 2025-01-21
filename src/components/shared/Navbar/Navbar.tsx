import { useState } from "react";

import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import Logo from "../../../assets/images/logo.png";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { currentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";

export default function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();
  const currentPathname = location.pathname;
  const user = useAppSelector(currentUser);
  return (
    <>
      <>
        <div className="w-full sticky z-30 top-0 left-0">
          <nav className="bg-neutral text-neutral-content  w-full  px-4 xl:px-20 shadow-2xl">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
              <Link
                to={"/"}
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img className="h-[50px] w-[80%]" src={Logo} alt="" />
              </Link>

              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <ul className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                  <li>
                    <Link
                      to={"/"}
                      className={`text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all ${
                        currentPathname === `/` ? "text-[#F2BF4A]" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/facility"}
                      className={`text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all ${
                        currentPathname === `/facility` ? "text-[#F2BF4A]" : ""
                      }`}
                    >
                      Facility
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/about-us"}
                      className={`text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all ${
                        currentPathname === `/about-us` ? "text-[#F2BF4A]" : ""
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact-us"}
                      className={`text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all ${
                        currentPathname === `/contact-us`
                          ? "text-[#F2BF4A]"
                          : ""
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                {user ? (
                  <Link
                    to={`/dashboard/${user.role}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md hidden lg:block"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md hidden lg:block"
                  >
                    Login
                  </Link>
                )}

                <div
                  className="block lg:hidden"
                  onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                >
                  <HiOutlineMenuAlt2 className="w-6 h-6 text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </nav>
        </div>

        {isNavbarOpen && (
          <motion.div
            className="w-[50%] bg-neutral text-neutral-content h-screen block lg:hidden fixed z-30 top-[15%] right-0 rounded"
            initial={{ x: "100%" }} // Start off-screen to the right
            animate={{ x: "0%" }} // Animate to its normal position
            exit={{ x: "0%" }} // Exit with a slide left and fade out
            transition={{
              duration: 0.5, // Duration for the entry animation
              ease: "easeInOut",
              exit: { duration: 0.75, ease: "easeInOut" }, // Duration for the exit animation
            }} // Animation duration
          >
            <div className="px-4 py-7 relative">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facility"
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Facility
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  {user ? (
                    <Link
                      to={`/dashboard/${user.role}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded-md"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="bg-blue-500 text-white px-2 py-1 rounded-md "
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
              <HiOutlineX
                onClick={() => setIsNavbarOpen(false)}
                className="w-6 h-6 text-white cursor-pointer absolute top-2 right-2"
              />
            </div>
          </motion.div>
        )}
      </>
    </>
  );
}
