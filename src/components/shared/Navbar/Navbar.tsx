import { useState } from "react";

import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import Logo from "../../../assets/images/logo.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <>
      <div>
        <div className="w-full sticky top-0 left-0">
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
                      className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/product"}
                      className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/about"}
                      className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                    >
                      About
                    </Link>
                  </li>
                </ul>

                <Link
                  to={"/login"}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md hidden lg:block"
                >
                  Login
                </Link>

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
            className="w-[50%] bg-neutral text-neutral-content h-screen block lg:hidden absolute z-30 top-[15%] right-0 rounded"
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
                    to="/product"
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Product
                  </Link>
                </li>
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
                    to="/"
                    className="text-white hover:text-[#F2BF4A] text-[16px] font-[500] hover:text-[17px] transition-all"
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <HiOutlineX
                onClick={() => setIsNavbarOpen(false)}
                className="w-6 h-6 text-white cursor-pointer absolute top-2 right-2"
              />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
