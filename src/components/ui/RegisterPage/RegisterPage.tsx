import { Link } from "react-router-dom";
import RegisterImage from "../../../assets/images/register.jpg";
import Input from "../../shared/InputFields/Input";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-between px-28 py-10">
      <div className="w-[48%]">
        <img className="" src={RegisterImage} alt="" />
      </div>
      <div className="shadow-gray-700 border py-10 px-4 w-[50%] rounded">
        <h1 className="text-center text-[25px] font-medium font-serif">
          Register First
        </h1>
        <form>
          <Input
            label="Name"
            name="name"
            placeholder="Enter your name"
            type="text"
          />
          <Input
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
          <Input
            label="Phone"
            name="phone"
            placeholder="Enter your phone"
            type="text"
          />
          <Input
            label="Address"
            name="address"
            placeholder="Enter your address"
            type="text"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-serif border rounded py-1 px-2 text-[18px] mt-4"
          >
            Register
          </button>
          <div>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 font-serif"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
