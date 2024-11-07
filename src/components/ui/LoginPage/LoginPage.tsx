import { Link } from "react-router-dom";
import LoginImage from "../../../assets/images/login.jpg";
import Input from "../../shared/InputFields/Input";
import SFForm from "../../shared/Form/SFForm";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../../../redux/features/auth/authSlice";

export interface TUser {
  _id: string
  name: string
  email: string
  phone: string
  role: string
  address: string
  createdAt: string
  updatedAt: string
  __v: number
}

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [login, {  error, isLoading }] = useLoginMutation();
  // const {reset} = useForm();
  const handleLoginSubmit = async (data: any) => {
    console.log(data);
    const userInfo ={
      email: data.email,
      password: data.password
    }
   const loginResponse = await login(userInfo).unwrap();
   const user:TUser | null = loginResponse.data;
   dispatch(setUser({
    user,
    token:loginResponse.token
   }));
   console.log(loginResponse);
   

    
   
  };
  return (
    <div className="flex items-center justify-between px-28">
      <div className="w-[50%]">
        <img className="" src={LoginImage} alt="" />
      </div>
      <div className="shadow-gray-700 border py-10 px-4 w-[50%] rounded">
        <h1 className="text-center text-[25px] font-medium font-serif">
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
            className="bg-blue-600 text-white font-serif border rounded py-1 px-2 text-[18px] mt-4"
          >
            Log in
          </button>
        </SFForm>
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
