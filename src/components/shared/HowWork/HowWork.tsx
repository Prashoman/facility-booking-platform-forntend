const HowWork = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto py-16 px-4 lg:px-20 bg-slate-800">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Connect Your Shop",
              description:
                "Integrate your shop with just a few clicks for seamless synchronization.",
              icon: "🖥️",
            },
            {
              step: "2",
              title: "Synchronize Products",
              description:
                "Sync your products to start managing and tracking orders.",
              icon: "🔄",
            },
            {
              step: "3",
              title: "Receive Orders",
              description:
                "Start receiving orders and manage everything in one place.",
              icon: "📦",
            },
            {
              step: "4",
              title: "Professional Fulfillment",
              description:
                "We handle warehousing and quality checks with a professional network.",
              icon: "🏢",
            },
            {
              step: "5",
              title: "Shipping & Tracking",
              description:
                "Track orders with real-time updates and manage returns easily.",
              icon: "🚚",
            },
            {
              step: "6",
              title: "Grow Your Business",
              description:
                "Focus on scaling your business while we handle the rest.",
              icon: "📈",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-500 shadow-lg rounded-lg p-6 text-center border-t-4 border-blue-500 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl font-bold text-blue-500 mb-4 animate-fade-in">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Step {item.step}: {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowWork;
