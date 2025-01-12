import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateFacilityMutation } from "../../../../redux/features/facility/facilityApi";
import { toast } from "sonner";
import { useState } from "react";

const AddFacility = () => {
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const [facilityInsert] = useCreateFacilityMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFacilitySubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Facility loading...");

    const { name, location, description, pricePerHour } = data;

    try {
      const formData = new FormData();
      formData.append("facilityImage", image as Blob);
      formData.append(
        "data",
        JSON.stringify({
          name,
          location,
          description,
          pricePerHour: Number(pricePerHour),
        })
      );
      const facilityResponse = await facilityInsert(formData).unwrap();
      if (facilityResponse?.success) {
        toast.success(facilityResponse?.message, { id: toastId });
        navigate("/dashboard/admin/facility");
      } else {
        toast.success(facilityResponse?.message, { id: toastId });
        navigate("/dashboard/admin/facility");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, { id: toastId });
      } else {
        toast.error("An unknown error occurred", { id: toastId });
      }
    }
  };

  // console.log({ errors });

  return (
    <div>
      <h1 className="text-[20px] font-semibold text-center font-serif">
        Add an Facility
      </h1>
      <div className="flex justify-center">
        <div className="w-4/6 border py-10 px-5">
          <form onSubmit={handleSubmit(handleFacilitySubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                id="name"
                placeholder="Enter the name of the facility"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.name?.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
                placeholder="Enter the image url"
                id="image"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
                accept="image/*"
              />
              {errors.image && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.image?.message as string}
                </p>
              )}
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="facility"
                  className="mt-2 h-32 w-32 object-cover"
                />
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Per Hour Price
              </label>
              <input
                type="text"
                placeholder="Enter the price per hour"
                {...register("pricePerHour", { required: "Name is required" })}
                id="PricePerHour"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              />
              {errors.pricePerHour && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.pricePerHour?.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                placeholder="Enter the location"
                id="PricePerHour"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              />
              {errors.location && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.location?.message as string}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Enter the Facility Description"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.description?.message as string}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <Link to={"/dashboard/admin/facility"}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Back
                </button>
              </Link>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Facility
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFacility;
