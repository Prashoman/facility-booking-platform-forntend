/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleFacilitiesQuery,
  useUpdateFacilityMutation,
} from "../../../../redux/features/facility/facilityApi";
import { TFacility } from "../../../../utils/type/Facility";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FacilityEditValidation } from "./Validation";

const EditFacility = () => {
  const navigate = useNavigate();
  const [singleImage, setSingleImage] = useState<File | null>(null);
  const { facilityId } = useParams();
  const [errors, setErrors] = useState<Partial<TFacility>>({
    name: "",
    image: "",
    pricePerHour: "",
    location: "",
    description: "",
  });
  const [formValues, setFormValues] = useState<Partial<TFacility>>({
    name: "",
    image: "",
    pricePerHour: "",
    location: "",
    description: "",
  });

  const [updatedFacilityQuery] = useUpdateFacilityMutation();

  const {
    data: singleFacility,
    error,
    isLoading,
  } = useGetSingleFacilitiesQuery(facilityId!, {
    skip: !facilityId,
  });

  if (error) {
    toast.error("Error fetching facility details");
    return null;
  }

  if (!isLoading && !singleFacility?.success) {
    toast.error("Facility not found");
    return null;
  }
  const facility: TFacility = singleFacility?.data;
  useEffect(() => {
    if (singleFacility?.success) {
      setFormValues({
        name: singleFacility.data.name,
        image: singleFacility.data.image,
        pricePerHour: singleFacility.data.pricePerHour,
        location: singleFacility.data.location,
        description: singleFacility.data.description,
      });
    }
  }, [facilityId, singleFacility]);

  const handleEditFacility = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Updating Facility loading....");
    const name = formValues.name;
    const pricePerHour = formValues.pricePerHour;
    const location = formValues.location;
    const description = formValues.description;

    const validation = FacilityEditValidation(
      name,
      pricePerHour,
      location,
      description,
      setErrors
    );
    if (!validation) {
      toast.error("Validation Error", { id: toastId });
      return;
    }
    try {
      let facilityImage = null;
      if(singleImage){
        const hostUrl = `https://api.imgbb.com/1/upload?key=9304fa358b01e425958d8d339f09a15c`;
      const imagePayload = new FormData();
      imagePayload.append("image", singleImage as Blob);
      const imageResponse = await fetch(hostUrl, {
        method: "POST",
        body: imagePayload,
      });
      const imageData = await imageResponse.json();
      console.log({ imageData });
      
      if (imageData.success) {
        facilityImage = imageData.data.url;
      } else {
        toast.error("An error occurred while uploading image", { id: toastId });
        return;
      }
      }else{
        facilityImage= formValues.image;
      }
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updatedData: any = {
        name,
        pricePerHour: Number(pricePerHour),
        location,
        description,
        image: facilityImage,
      };
      console.log({ updatedData });
      
     const uploadData = {
        id: facilityId,
        updateFacility: updatedData,
      };
      const updateFacilityResponse = await updatedFacilityQuery(
        uploadData
      ).unwrap();
      // console.log({ updateFacilityResponse });
      if (updateFacilityResponse?.success) {
        toast.success(updateFacilityResponse?.message, { id: toastId });
        navigate("/dashboard/admin/facility");
      } else {
        toast.error(updateFacilityResponse?.message, { id: toastId });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      // console.log({ error });
      toast.error(error?.message, { id: toastId });
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
                value={formValues.name}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
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
                {singleImage ? (
                  <img
                    src={URL.createObjectURL(singleImage)}
                    alt={formValues?.name}
                    className="w-20 h-20 object-cover"
                  />
                ) : (
                  <img
                    src={formValues?.image}
                    alt={formValues?.name}
                    className="w-20 h-20 object-cover"
                  />
                )}
              </div>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    setSingleImage(e.target.files[0]);
                  }
                }}
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
                value={formValues.pricePerHour}
                onChange={(e) =>
                  setFormValues({ ...formValues, pricePerHour: e.target.value })
                }
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
                value={formValues.location}
                onChange={(e) =>
                  setFormValues({ ...formValues, location: e.target.value })
                }
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
                value={formValues.description}
                onChange={(e) =>
                  setFormValues({ ...formValues, description: e.target.value })
                }
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
