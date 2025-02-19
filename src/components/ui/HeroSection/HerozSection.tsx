const HerozSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/spxpK9cC/cover.jpg)",
        }}
      >
        <div className="hero-overlay bg-blue-950 bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">
              Find Your Perfect Sports Facility
            </h1>
            <p className="mb-5 text-lg">
              Easily book premium sports facilities for your games, events, or
              practice sessions. Whether it's basketball, tennis, or swimming,
              we've got you covered!
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 animate-bounce">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HerozSection;
