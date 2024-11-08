import { Link, useNavigate } from "react-router-dom";
import RegisterImage from "../../../assets/images/register.jpg";
import Input from "../../shared/InputFields/Input";
import SFForm from "../../shared/Form/SFForm";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";
import { TError } from "../../../utils/type/error";

const RegisterPage = () => {
  const [registration] = useRegisterMutation();
  const navigate = useNavigate();

  const handleRegistrationSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("Loading...");
    const { name, email, password, phone, address } = data;
    try {
      const userInfo = {
        name,
        email,
        password,
        phone,
        role: "user",
        address,
      };
      const regResponse = await registration(userInfo).unwrap();
      console.log("regResponse", regResponse);

      toast.success(regResponse?.message, { id: tostId });
      navigate("/login");
    } catch (error) {
      console.log("error", error);

      const errorMes = error as TError;
      toast.error(errorMes?.data?.message, { id: tostId });
      // toast.error("Something went wrong",{id:tostId});
    }
  };
  return (
    <div className="flex items-center justify-between px-28 py-10">
      <div className="w-[48%]">
        <img className="" src={RegisterImage} alt="" />
      </div>
      <div className="shadow-gray-700 border py-10 px-4 w-[50%] rounded">
        <h1 className="text-center text-[25px] font-medium font-serif">
          Register First
        </h1>
        <SFForm onSubmit={handleRegistrationSubmit}>
          <Input
            label="Name"
            name="name"
            placeholder="Enter your name"
            type="text"
            required={true}
          />
          <Input
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
            required={true}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required={true}
          />
          <Input
            label="Phone"
            name="phone"
            placeholder="Enter your phone"
            type="text"
            required={true}
          />
          <Input
            label="Address"
            name="address"
            placeholder="Enter your address"
            type="text"
            required={true}
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
        </SFForm>
      </div>
    </div>
  );
};

export default RegisterPage;
