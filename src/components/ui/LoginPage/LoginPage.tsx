import { Link } from "react-router-dom";
import LoginImage from "../../../assets/images/login.jpg";
import Input from "../../shared/InputFields/Input";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-between px-28">
      <div className="w-[50%]">
        <img className="" src={LoginImage} alt="" />
      </div>
      <div className="shadow-gray-700 border py-10 px-4 w-[50%] rounded">
        <h1 className="text-center text-[25px] font-medium font-serif">
          Log in
        </h1>
        <form>
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
          <button
            type="submit"
            className="bg-blue-600 text-white font-serif border rounded py-1 px-2 text-[18px] mt-4"
          >
            Log in
          </button>
        </form>
        <div>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 font-serif"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
