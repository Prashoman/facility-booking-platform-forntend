import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useGetSingleFacilitiesQuery } from "../../redux/features/facility/facilityApi";
import Loading from "../../components/shared/Loading/Loading";
import { useEffect } from "react";

const FacilityDetails = () => {
  const { facilityId } = useParams<{ facilityId: string }>();
  const { data, isLoading } = useGetSingleFacilitiesQuery(facilityId);
  const facility = data?.data;
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (!facility) {
    return <h1 className="text-white text-2xl">No Facility Found</h1>;
  }
  console.log({ facility });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white flex flex-col items-center py-10 px-6">
      {/* Facility Header */}
      <div className="text-center mb-12 max-w-3xl w-full">
        <motion.h1
          className="text-4xl font-bold text-yellow-400 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {facility?.name || "Facility Name"}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {facility?.description ||
            "A detailed description of the sports facility will be here."}
        </motion.p>
      </div>

      {/* Facility Image */}
      <motion.div
        className="w-full max-w-3xl mb-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src={facility?.image || "https://via.placeholder.com/1500x800"}
          alt={facility?.name || "Facility Image"}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </motion.div>

      {/* Facility Details */}
      <div className="w-full max-w-3xl mb-12bg-gradient-to-b from-[#2d4b8e] to-[#1e3a8a] shadow-xl p-6 rounded-lg">
        <motion.h2
          className="text-2xl font-semibold text-gray-100 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Facility Details
        </motion.h2>
        <motion.div
          className="space-y-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <p>
            <strong>Price per Hour:</strong>{" "}
            {facility?.pricePerHour || "200 BDT"}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {facility?.location || "Dhaka, Bangladesh"}
          </p>
          <p>
            <strong>Total Bookings:</strong> {facility?.count || 350}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {facility?.createdAt
              ? new Date(facility.createdAt).toLocaleString()
              : "Not Available"}
          </p>
        </motion.div>
      </div>

      {/* Booking Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      >
        <Link
          to={`/booking/${facility?._id || 1}`}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow-xl hover:bg-blue-700 transition ease-in-out"
        >
          Book Now
        </Link>
      </motion.div>
    </div>
  );
};

export default FacilityDetails;
