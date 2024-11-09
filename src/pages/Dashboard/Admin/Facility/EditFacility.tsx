import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleFacilitiesQuery,
  useUpdateFacilityMutation,
} from "../../../../redux/features/facility/facilityApi";
import { TFacility } from "../../../../utils/type/Facility";
import { useState } from "react";
import { toast } from "sonner";

const EditFacility = () => {
  const navigate = useNavigate()
  const { facilityId } = useParams();
  const [errors, setErrors] = useState<Partial<TFacility>>({
    name: "",
    image: "",
    pricePerHour: "",
    location: "",
    description: "",
  });
  // console.log({ errors });

  const validationFields = (
    name: string,
    pricePerHour: number,
    location: string,
    description: string
  ) => {
    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }

    if (!pricePerHour) {
      setErrors((prev) => ({
        ...prev,
        pricePerHour: "Price per hour is required",
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, pricePerHour: 0 }));
    }
    if (!location) {
      setErrors((prev) => ({ ...prev, location: "Location is required" }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, location: "" }));
    }
    if (!description) {
      setErrors((prev) => ({
        ...prev,
        description: "Description is required",
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, description: "" }));
    }
    return true;
  };

  const { data: singleFacility } = useGetSingleFacilitiesQuery(facilityId);

  const facility: TFacility = singleFacility?.data;
  const [updatedFacilityQuery] = useUpdateFacilityMutation();

  const handleEditFacility = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Updating Facility loading....");
    // console.log("Edit Facility");
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const image = formData.get("image") as string;
    const pricePerHour = formData.get("pricePerHour") as string;
    const location = formData.get("location") as string;
    const description = formData.get("description") as string;

    const validationReturn = validationFields(
      name,
      +pricePerHour,
      location,
      description
    );
    if (!validationReturn) return;
    try {
      let updateFacility;

      if (image) {
        updateFacility = {
          name,
          image,
          pricePerHour: +pricePerHour,
          location,
          description,
        };
      } else {
        updateFacility = {
          name,
          pricePerHour: +pricePerHour,
          location,
          description,
        };
      }

      const contentUpdtedInfo = {
        id: facilityId,
        updateFacility,
      };

      const updateFacilityResponse = await updatedFacilityQuery(
        contentUpdtedInfo
      ).unwrap();
      console.log({ updateFacilityResponse });
      toast.success("Facility updated successfully",{id:toastId});
      navigate("/dashboard/admin/facility");
    } catch (error) {
      console.log({ error });
      toast.error("Error updating facility");
    }
  };

  return (
    <div>
      <h1 className="text-[20px] font-semibold text-center font-serif">
        Edit an {facility?.name} Facility
      </h1>
      <div className="flex justify-center">
        <div className="w-4/6 border py-10 px-5">
          <form onSubmit={handleEditFacility}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                defaultValue={facility?.name}
                name="name"
                id="name"
                placeholder="Enter the name of the facility"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.name as string}
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
              <div>
                <img
                  src={facility?.image}
                  alt={facility?.name}
                  className="w-20 h-20 object-cover"
                />
              </div>
              <input
                type="text"
                name="image"
                placeholder="Enter the image url"
                id="image"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              />
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
                defaultValue={facility?.pricePerHour}
                placeholder="Enter the price per hour"
                name="pricePerHour"
                id="PricePerHour"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              />
              {errors.pricePerHour && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.pricePerHour as string}
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
                defaultValue={facility?.location}
                name="location"
                placeholder="Enter the location"
                id="PricePerHour"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              />
              {errors.location && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.location as string}
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
                defaultValue={facility?.description}
                name="description"
                placeholder="Enter the Facility Description"
                className="mt-1 border border-gray-600 outline-none px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md py-2"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm font-serif pt-1">
                  {errors.description as string}
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
                Edit Facility
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditFacility;
