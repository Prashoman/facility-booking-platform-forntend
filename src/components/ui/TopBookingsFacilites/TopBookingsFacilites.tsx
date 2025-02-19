import { useGetPopularFacilitesQuery } from "../../../redux/features/facility/facilityApi";
import { TFacility } from "../../../utils/type/Facility";
import FacilityCard from "../../shared/FacilityCard/FacilityCard";
import FacilityCardSkeleton from "../../shared/FacilityCardSkeleton/FacilityCardSkeleton";

const TopBookingsFacilites = () => {
  const { data: popularFacilitys, isLoading } =
    useGetPopularFacilitesQuery(undefined);
  // console.log({popularFacilitys});

  return (
    <div className="bg-gradient-to-r from-blue-900 to-gray-900">
      <div className="container mx-auto px-4 lg:px-20 py-12">
        <h1 className="text-4xl py-6 font-bold text-center text-white">
          <span className="text-yellow-500">Top</span> Popular Facility
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading && <FacilityCardSkeleton />}
          {popularFacilitys?.data?.length > 0 ? (
            popularFacilitys?.data.map((facility: TFacility, index: number) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <FacilityCard facility={facility} />
              </div>
            ))
          ) : (
            <h1 className="text-white text-2xl text-center col-span-full py-10">
              🚫 No Popular Facility Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBookingsFacilites;
