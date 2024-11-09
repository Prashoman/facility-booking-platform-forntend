import { Link } from "react-router-dom";
import {
  useDeleteFacilityMutation,
  useGetFacilitiesQuery,
} from "../../../../redux/features/facility/facilityApi";
import { TFacility } from "../../../../utils/type/Facility";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Facility = () => {
  const { data: facilities } = useGetFacilitiesQuery(undefined);
  const [deleteFacility] = useDeleteFacilityMutation();
  const handleDelete = async (facilityId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const deleteResponse = deleteFacility(facilityId);
          console.log(deleteResponse);
          toast.success("Facility deleted successfully");
        } catch {
          toast.error("Failed to delete facility");
        }
      }
    });
  };
  console.log(facilities);
  return (
    <div>
      <div className="w-full flex justify-end pb-4">
        <Link to={"/dashboard/facility/add"} className="btn btn-sm btn-success">
          Add Facility
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Image</th>
              <th>Per Price Hours</th>
              <th>Location</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {facilities?.data?.length > 0 ? (
              facilities?.data?.map((facility: TFacility, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{facility.name}</td>
                  <td>
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-10 h-10"
                    />
                  </td>
                  <td>{facility.pricePerHour}</td>
                  <td>{facility.location}</td>
                  <td>{facility.description}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/dashboard/facility/edit/${facility._id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => {
                          handleDelete(facility._id);
                        }}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Facility;
