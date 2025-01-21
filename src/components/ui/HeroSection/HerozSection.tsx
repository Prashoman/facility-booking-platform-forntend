const HerozSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              Find Your Perfect Sports Facility
            </h1>
            <p className="mb-5 text-lg">
              Easily book premium sports facilities for your games, events, or
              practice sessions. Whether it's basketball, tennis, or swimming,
              we've got you covered!
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HerozSection;
