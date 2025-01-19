import FacilityCard from "../../components/shared/FacilityCard/FacilityCard";
import FacilityCardSkeleton from "../../components/shared/FacilityCardSkeleton/FacilityCardSkeleton";
import { useGetFacilitiesQuery } from "../../redux/features/facility/facilityApi";
import { TFacility } from "../../utils/type/Facility";

const Facility = () => {
  const { data: getFacilities, isLoading } = useGetFacilitiesQuery(undefined);
  return (
    <>
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 lg:px-20 py-10">
          <h1 className="text-3xl py-6 font-bold text-center text-white">
            All Facility
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {isLoading && <FacilityCardSkeleton />}
            {getFacilities?.data?.length > 0 ? (
              getFacilities?.data.map((facility: TFacility, index: number) => (
                <FacilityCard key={index} facility={facility} />
              ))
            ) : (
              <h1 className="text-white text-2xl">No Popular Facility Found</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Facility;
