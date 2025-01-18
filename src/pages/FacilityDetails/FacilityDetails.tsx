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
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-10">
      <motion.div
        className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src={facility.image}
          alt={facility.name}
          className="w-full h-64 object-cover"
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
          <motion.p
            className="text-gray-300 mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {facility.description}
          </motion.p>
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
              <span className="font-semibold text-gray-100">Location: </span>
              {facility.location}
            </p>
            <p>
              <span className="font-semibold text-gray-100">
                ATotal Bookings:{" "}
              </span>
              {facility.count}
            </p>
            <p>
              <span className="font-semibold text-gray-100">Created At: </span>
              {new Date(facility.createdAt).toLocaleString()}
            </p>
          </motion.div>
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <Link
              to={`/booking/${facility?._id}`}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FacilityDetails;
