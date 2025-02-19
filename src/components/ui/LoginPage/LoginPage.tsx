import { Link, useNavigate } from "react-router-dom";
import Input from "../../shared/InputFields/Input";
import SFForm from "../../shared/Form/SFForm";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { TError } from "../../../utils/type/error";

export interface TUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  // const {reset} = useForm();
  const handleLoginSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const loginResponse = await login(userInfo).unwrap();
      const user: TUser | null = loginResponse.data;
      dispatch(
        setUser({
          user,
          token: loginResponse.token,
        })
      );
      navigate(`/dashboard/${user?.role}`);
      toast.success("Login successful", { id: toastId });
    } catch (error) {
      // console.log("error", error);
      const errorMes = error as TError;
      toast.error(errorMes?.data?.message, { id: toastId });
      // } else {
      //   toast.error("Somethings went wrong!", { id: toastId });
      // }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-blue-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gradient-to-b from-[#3b4e88] to-[#2a3b6e] shadow-xl p-8 rounded-lg">
        <h1 className="text-center text-3xl text-white font-medium font-serif mb-6">
          Login
        </h1>
        <SFForm onSubmit={handleLoginSubmit}>
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
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 w-full text-white font-serif border rounded py-2 mt-4 text-lg transition-colors"
          >
            Log in
          </button>
        </SFForm>
        <div className="mt-6 text-center">
          <p className="text-white">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-600 font-serif"
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
