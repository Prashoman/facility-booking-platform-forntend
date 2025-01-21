import { motion } from "framer-motion";
import { TFacility } from "../../../utils/type/Facility";
import moment from "moment";
import { Link } from "react-router-dom";

interface TProps{
    facility: TFacility
}

const FacilityCard = ({facility}:TProps) => {
  return (
    <>
      <motion.div
        className="max-w-sm w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          className="w-full h-48 object-cover"
          src={facility?.image}
          alt="Updated Product"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-100 mb-2">{facility?.name}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {facility?.description?.length> 30 ? facility?.description?.slice(0, 30) + "..." : facility?.description}
          </p>
          <div className="space-y-2 text-gray-300">
            <p>
              <span className="font-semibold text-gray-100">
                Price per Hour:
              </span>{" "}
              {facility?.pricePerHour} BDT
            </p>
            <p>
              <span className="font-semibold text-gray-100">Location:</span>{" "}
                {facility?.location}
            </p>
            <p>
              <span className="font-semibold text-gray-100">
                Total Bookings:
              </span>{" "}
              {
                facility?.count
              }
            </p>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xs text-gray-500">Created At: {moment(facility?.createdAt).format("DD-MMM-YYYY hh:mm A")}</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={`/facility/${facility?._id}`}
                className="px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FacilityCard;
