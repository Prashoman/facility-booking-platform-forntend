const FacilityCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index} // Add a unique key for each child element
          className="max-w-sm w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse mb-4"
        >
          <div className="w-full h-48 bg-gray-700"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/4"></div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="h-4 bg-gray-700 rounded w-1/3"></div>
              <div className="h-10 bg-blue-700 rounded w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FacilityCardSkeleton;
