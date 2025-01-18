import { useGetPopularFacilitesQuery } from "../../../redux/features/facility/facilityApi";
import { TFacility } from "../../../utils/type/Facility";
import FacilityCard from "../../shared/FacilityCard/FacilityCard";
import FacilityCardSkeleton from "../../shared/FacilityCardSkeleton/FacilityCardSkeleton";

const TopBookingsFacilites = () => {
  const { data: popularFacilitys, isLoading } =
    useGetPopularFacilitesQuery(undefined);
  // console.log({popularFacilitys});

  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {isLoading && <FacilityCardSkeleton />}
          {popularFacilitys?.data?.length > 0 ? (
            popularFacilitys?.data.map((facility: TFacility, index: number) => (
              <FacilityCard key={index} facility={facility} />
            ))
          ) : (
            <h1 className="text-white text-2xl">No Popular Facility Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBookingsFacilites;
