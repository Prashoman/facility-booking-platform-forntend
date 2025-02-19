import { motion } from "framer-motion";
import { TFacility } from "../../../utils/type/Facility";
import moment from "moment";
import { Link } from "react-router-dom";

interface TProps {
  facility: TFacility;
}

const FacilityCard = ({ facility }: TProps) => {
  return (
    <>
      <motion.div
        className="max-w-sm w-full bg-gradient-to-b from-[#2d4b8e] to-[#1e3a8a] rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Facility Image */}
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={facility?.image}
            alt="Facility"
          />
          <div className="absolute top-2 right-2 bg-yellow-500 text-gray-900 text-xs px-2 py-1 rounded-lg font-bold">
            {facility?.category || "Sports"}
          </div>
        </div>

        {/* Facility Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            {facility?.name}
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            {facility?.description?.length > 40
              ? facility?.description?.slice(0, 40) + "..."
              : facility?.description}
          </p>
          <div className="space-y-2 text-gray-300">
            <p>
              <span className="font-semibold text-yellow-400">
                Price per Hour:
              </span>{" "}
              {facility?.pricePerHour} BDT
            </p>
            <p>
              <span className="font-semibold text-yellow-400">Location:</span>{" "}
              {facility?.location}
            </p>
            <p>
              <span className="font-semibold text-yellow-400">
                Total Bookings:
              </span>{" "}
              {facility?.count}
            </p>
          </div>

          {/* Footer Section */}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xs text-gray-500">
              Created At:{" "}
              {moment(facility?.createdAt).format("DD-MMM-YYYY hh:mm A")}
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to={`/facility/${facility?._id}`}
                className="px-3 py-2 bg-gradient-to-r from-[#2d4b8e] to-[#1e3a8a] text-white rounded-lg font-semibold hover:from-yellow-500 hover:to-blue-500 transition-all"
              >
                View Details
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FacilityCard;
