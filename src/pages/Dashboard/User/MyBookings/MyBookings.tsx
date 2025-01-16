import { useRef, useState } from "react";
import moment from "moment";
import { TTableHeader } from "../../../../utils/type/Table";
import Table from "../../../../components/shared/Table/Table";
import TableSkeleton from "../../../../components/shared/TableSkeleton/TableSkeleton";
import { TBooking } from "../../../../utils/type/booking.type";
import {
  useCancelBookingMutation,
  useGetMyBookingsQuery,
} from "../../../../redux/features/user/bookings/mybooking";
import { modelOpen } from "../../../../helpers";
import MyBookingDetailsModel from "./MyBookingDetailsModel";
import { handleDelete } from "../../../../utils/HandleDelete";
import { toast } from "sonner";

const AllBookings = () => {
  const viewRef = useRef<HTMLDialogElement>(null);
  const [bookingData, setBookingData] = useState<Partial<TBooking>>({
    date: "",
    startTime: "",
    endTime: "",
    facility: {
      name: "",
      description: "",
      pricePerHour: 0,
      image: "",
      location: "",
    },
    payableAmount: 0,
    isBooked: "",
    createdAt: "",
    updatedAt: "",
  });
  const { data, isLoading } = useGetMyBookingsQuery(undefined);
  const [cancelBooking] = useCancelBookingMutation();
  const myBooking = data?.data;

  const tableHeadings: TTableHeader[] = [
    { title: "SI", key: "si" },
    { title: "Facility Name", key: "facility-name" },
    { title: "Facility Image", key: "facility-image" },
    { title: "Per Hours Price", key: "facility-image" },
    { title: "Location", key: "location" },
    { title: "Booking Date", key: "booking-date" },
    { title: "Booking Time", key: "booking-time" },
    { title: "Amount", key: "amount" },
    { title: "Status", key: "status" },
    { title: "Created Book", key: "created-book" },
    { title: "Action", key: "action" },
  ];

  const handleViesDetails = (id: string) => {
    if (id) {
      const filterData = myBooking?.find((item: TBooking) => item._id === id);
      setBookingData({
        date: filterData?.date,
        startTime: filterData?.startTime,
        endTime: filterData?.endTime,
        facility: {
          name: filterData?.facility?.name,
          description: filterData?.facility?.description,
          pricePerHour: filterData?.facility?.pricePerHour,
          image: filterData?.facility?.image,
          location: filterData?.facility?.location,
        },
        payableAmount: filterData?.payableAmount,
        isBooked: filterData?.isBooked,
        createdAt: filterData?.createdAt,
        updatedAt: filterData?.updatedAt,
      });
      modelOpen(viewRef);
    }
  };

  const cancelUserBooking = async (id: string) => {
    if (id) {
      try {
        await handleDelete(id, cancelBooking);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <div>
        <div className="w-full flex justify-end pb-4"></div>
        <Table data={tableHeadings}>
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td colSpan={tableHeadings?.length} className="text-center">
                  <TableSkeleton />
                </td>
              </tr>
            ))
          ) : myBooking?.length > 0 ? (
            myBooking?.map((item: TBooking, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.facility?.name ?? ""}</td>
                <td>
                  <img
                    src={item?.facility?.image}
                    alt={item?.facility?.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td>{item?.facility?.pricePerHour ?? ""}</td>
                <td>{item?.facility?.location ?? ""}</td>
                <td>{item?.date}</td>
                <td>
                  {item?.startTime} - {item?.endTime}
                </td>
                <td>{item?.payableAmount}</td>
                <td>
                  {item?.isBooked === "confirmed" ? (
                    <span className="text-green-500">Booked</span>
                  ) : (
                    <span className="text-red-500">Canceled</span>
                  )}
                </td>
                <td>{moment(item?.createdAt).format("DD-MMM-YYYY hh:mm A")}</td>
                <td>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        handleViesDetails(item?._id);
                      }}
                      className="btn btn-sm btn-primary"
                    >
                      View
                    </button>
                    {item?.isBooked === "confirmed" && (
                      <button
                        onClick={() => {
                          cancelUserBooking(item?._id);
                        }}
                        className="btn btn-sm btn-danger"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No data found
              </td>
            </tr>
          )}
        </Table>
      </div>
      {/* Render Modal Component */}
      <MyBookingDetailsModel modalRef={viewRef} BookingDetails={bookingData} />
    </div>
  );
};

export default AllBookings;
