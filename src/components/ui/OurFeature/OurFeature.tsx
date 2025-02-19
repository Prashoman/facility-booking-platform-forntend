

const OurFeature = () => {
  return (
    <>
      <section className="w-full mx-auto py-16 lg:px-20 bg-gradient-to-r from-blue-900 to-gray-900">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "🔒",
              title: "Security",
              description:
                "We prioritize your data security with state-of-the-art encryption and security protocols.",
            },
            {
              icon: "⚡",
              title: "Speed",
              description:
                "Our platform is designed for lightning-fast access and seamless performance.",
            },
            {
              icon: "📱",
              title: "Mobile Friendly",
              description:
                "Easily access our service on the go with our mobile-responsive platform.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#2d4b8e] to-[#1e3a8a] shadow-xl rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-5xl font-bold text-yellow-500 mb-4 animate-bounce">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurFeature;
