/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "../../../../components/shared/Modal/Modal";
import { TBooking } from "../../../../utils/type/booking.type";

interface MyBookingDetailsModelProps {
  modalRef: any;
  BookingDetails: Partial<TBooking>;
}

const MyBookingDetailsModel = ({
  modalRef,
  BookingDetails,
}: MyBookingDetailsModelProps) => {
  return (
    <>
      <Modal modalRef={modalRef}>
        <div className="p-6 space-y-4">
          {/* Facility Image */}
          <div className="flex justify-center">
            <img
              src={BookingDetails?.facility?.image}
              alt={BookingDetails?.facility?.name}
              className="w-32 h-32 object-cover rounded-full shadow-md"
            />
          </div>

          {/* Facility Info */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {BookingDetails?.facility?.name}
            </h2>
            <p className="text-sm text-gray-500">
              {BookingDetails?.facility?.description}
            </p>
            <p className="text-sm text-gray-500">
              {BookingDetails?.facility?.location}
            </p>
          </div>

          {/* Booking Details */}
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span>{" "}
              {BookingDetails?.date}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Time:</span>{" "}
              {BookingDetails?.startTime} - {BookingDetails?.endTime}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Price Per Hour:</span> $
              {BookingDetails?.facility?.pricePerHour}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Total Amount:</span> $
              {BookingDetails?.payableAmount}
            </p>
          </div>

          {/* Status Badge */}
          <div className="text-center">
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                BookingDetails.isBooked === "confirmed"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {BookingDetails.isBooked === "confirmed" ? "Booked" : "Canceled"}
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MyBookingDetailsModel;
