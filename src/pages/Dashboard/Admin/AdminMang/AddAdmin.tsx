import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TError } from "../../../../utils/type/error";
import { useCreateAdminMutation } from "../../../../redux/features/admin/AdminMangement/AdminMangement";

const AddAdmin = () => {
  const navigate = useNavigate();
  const [createAdmin] = useCreateAdminMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAdminSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding admin loading...");

    const { name, email, password, phone, address } = data;

    try {
      const adminInfo = {
        name,
        email,
        password,
        phone,
        role: "admin",
        address,
      };
       await createAdmin(adminInfo).unwrap();
    //   console.log(facilityResponse);
      toast.success("admin added successfully", { id: toastId });
      navigate("/dashboard/admin/admin");
    } catch (error) {
      const errorMes = error as TError;
      toast.error(errorMes?.data?.message, { id: toastId });
    }
  };
  return (
    <div>
      <h1 className="text-[20px] font-semibold text-center font-serif">
        Add an Admin
      </h1>
      <div className="flex justify-center">
        <div className="w-full lg:w-4/6 border py-10 px-5">
          <form onSubmit={handleSubmit(handleAdminSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-xs lg:text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                id="name"
                placeholder="Enter the name of the admin"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xs lg:text-sm  rounded-md py-1"
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.name?.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs lg:text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                id="email"
                placeholder="Enter the valid Email"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.email?.message as string}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter the password"
                {...register("password", { required: "password is required" })}
                id="password"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-1"
              />
              {errors.password && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.password?.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                {...register("phone", { required: "phone is required" })}
                placeholder="Enter the phone"
                id="PricePerHour"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-1"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.phone?.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                {...register("address", {
                  required: "address is required",
                })}
                placeholder="Enter the admin Address"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-1"
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.address?.message as string}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <Link to={"/dashboard/admin/admin"}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded mr-2">
                  Back
                </button>
              </Link>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              >
                Add Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
