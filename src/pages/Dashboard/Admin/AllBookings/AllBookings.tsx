
import { TTableHeader } from '../../../../utils/type/Table';
import Table from '../../../../components/shared/Table/Table';
import TableSkeleton from '../../../../components/shared/TableSkeleton/TableSkeleton';
import { useGetAllAdminBookingsQuery } from '../../../../redux/features/admin/booking/bookingApi';
import { TBooking } from '../../../../utils/type/booking.type';

const AllBookings = () => {
    const { data, isLoading } = useGetAllAdminBookingsQuery(undefined);
      const allBooking = data?.data;
    
      const tableHeadings: TTableHeader[] = [
        { title: "SI", key: "si" },
        { title: "User Name", key: "user-name" },
        { title: "User Email", key: "user-email" },
        { title: "Phone", key: "phone" },
        { title: "Facility Name", key: "facility-name" },
        { title: "Facility Image", key: "facility-image" },
        { title: "Booking Date", key: "booking-date" },
        { title: "Booking Time", key: "booking-time" },
        { title: "Amount", key: "amount" },
      ];

    return (
        <div>
        <div className="w-full flex justify-end pb-4">
          
        </div>
        <Table data={tableHeadings}>
          {isLoading ? (
            // Skeleton Loader for Table Rows
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td colSpan={tableHeadings?.length} className="text-center">
                  <TableSkeleton />
                </td>
              </tr>
            ))
          ) : allBooking?.length > 0 ? (
            allBooking?.map((item: TBooking, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.user?.name ?? ""}</td>
                <td>{item?.user?.email ?? ""}</td>
                <td>{item?.user?.phone ?? ""}</td>
                <td>{item?.facility?.name ?? ""}</td>
                <td>
                  <img
                    src={item?.facility?.image}
                    alt={item?.facility?.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </td>
                <td>{item?.date}</td>
                <td>
                  {item?.startTime} - {item?.endTime}
                </td>
                <td>{item?.payableAmount}</td>
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
    );
};

export default AllBookings;
