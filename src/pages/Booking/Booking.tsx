/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useGetSingleFacilitiesQuery } from "../../redux/features/facility/facilityApi";
import { useEffect, useState } from "react";
import Loading from "../../components/shared/Loading/Loading";
import {
  useCreateBookingMutation,
  useGetAvailableBookingsSlotQuery,
} from "../../redux/features/user/bookings/bookings";


import { toast } from "sonner";

const Booking = () => {
  
  const [filter, setFilter] = useState<{ date?: string; facility: string }>({ facility: "" });

  const [date, setDate] = useState<string>("");
  const { facilityId } = useParams<{ facilityId: string }>();

  // Fetch facility details
  const { data, isLoading } = useGetSingleFacilitiesQuery(facilityId);
  const [bookingFacility] = useCreateBookingMutation();

  const facility = data?.data;

  // Fetch available booking slots
  const {
    data: getSlot,
    error,
    isError,
    isLoading: slotLoading,
  } = useGetAvailableBookingsSlotQuery(filter || {}, {
    skip: !filter.facility,
    refetchOnMountOrArgChange: true,
  });
  console.log({ getSlot });

  // Handle error with toast
  useEffect(() => {
    if (isError && error) {
      const errorMessage =
        (error as any)?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  }, [isError, error]);

  if (isLoading) {
    return <Loading />;
  }

  if (!facility) {
    return <h1 className="text-white text-2xl">No Facility Found</h1>;
  }

  const handleCheck = () => {
    const newPayload = date
      ? { date, facility: facilityId! }
      : { facility: facilityId! };
    setFilter(newPayload);

    // dispatch(setPayload(newPayload));
  };

  const handleProcess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const startTime = formData.get("startTime") as string;
    const endTime = formData.get("endTime") as string;
    console.log({ startTime, endTime });

    

    if (!startTime || !endTime || !date) {
      return toast.error("Please select start and end time and Date");
    }
    if( startTime >= endTime){
      return toast.error("End time should be greater than start time");
    }
    const newPayload = {
      date: date,
      facility:facilityId,
      startTime,
      endTime,
    };
    try {
      const response = await bookingFacility(newPayload).unwrap();
      console.log({ response });
      if (response.success) {
        toast.success(response.message);
        window.location.href = response?.data?.payment_url;
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900">
        <div className="text-white flex items-center justify-center px-6 py-10">
          <motion.div
            className="max-w-3xl w-full bg-gray-800 flex items-center rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src={facility.image}
              alt={facility.name}
              className="w-[200px] h-[100px] object-cover"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="p-6">
              <motion.h1
                className="text-3xl font-bold mb-4 text-yellow-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {facility.name}
              </motion.h1>

              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
                <p>
                  <span className="font-semibold text-gray-100">
                    Price per Hour:{" "}
                  </span>
                  {facility.pricePerHour} BDT
                </p>
                <p>
                  <span className="font-semibold text-gray-100">
                    Location:{" "}
                  </span>
                  {facility.location}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div>
          <h1 className="text-white text-xl text-center font-sans font-semibold">
            Filter Available Slot By Date
          </h1>
        </div>
        <div className="py-4">
          <div className="flex justify-center items-center gap-3">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-2 border-gray-300 px-2 py-1 rounded-lg bg-slate-800 text-white"
            />
            <button
              onClick={handleCheck}
              className="btn btn-sm bg-blue-600 text-white text-[13px]"
            >
              Check
            </button>
          </div>
          <div>
            {slotLoading ? (
              <Loading />
            ) : (
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {getSlot?.data.map((slot: any) => (
                  <div
                    key={slot.id}
                    className="bg-gray-800 p-4 rounded-lg shadow-lg"
                  >
                    <h1 className="text-white text-lg font-semibold">
                      {slot.startTime} - {slot.endTime}
                    </h1>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleProcess} className="w-1/3 mx-auto mt-4">
              <div className="flex justify-between gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <label htmlFor="time" className="text-white">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="border-2 border-gray-300 px-2 py-1 rounded-lg bg-slate-800 text-white"
                    placeholder="00:00"
                    min="01:00"
                    max="24:00"
                    name="startTime"
                    onChange={(e) => {
                      const value = e.target.value;
                      const [hours] = value.split(":").map(Number);
                      if (hours === 0) {
                        e.target.value = "01:00";
                      }
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="time" className="text-white">
                    End Time
                  </label>
                  <input
                    type="time"
                    className="border-2 border-gray-300 px-2 py-1 rounded-lg bg-slate-800 text-white"
                    placeholder="00:00"
                    min="01:00"
                    max="24:00"
                    name="endTime"
                    onChange={(e) => {
                      const value = e.target.value;
                      const [hours] = value.split(":").map(Number);
                      if (hours === 0) {
                        e.target.value = "01:00";
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="btn bg-blue-600 text-white text-[13px]"
                >
                  Process to Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
