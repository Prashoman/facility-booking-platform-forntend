const HowWork = () => {
  return (
    <>
     <section className="w-full mx-auto py-16 lg:px-20 bg-gradient-to-r from-blue-900 to-gray-900">
  <h2 className="text-4xl font-bold text-center text-white mb-12">
    How It Works
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        step: "1",
        title: "Register & Login",
        description:
          "Create an account and log in to access our sports facility booking system.",
        icon: "👤",
      },
      {
        step: "2",
        title: "Browse & Select",
        description:
          "Explore available sports facilities, check pricing, and choose your preferred slot.",
        icon: "🏟️",
      },
      {
        step: "3",
        title: "Instant Booking",
        description:
          "Book your slot with a few clicks and get instant confirmation.",
        icon: "📅",
      },
      {
        step: "4",
        title: "Secure Payment",
        description: "Pay securely online with multiple payment options.",
        icon: "💳",
      },
      {
        step: "5",
        title: "Enjoy Your Game",
        description:
          "Visit the facility at the scheduled time and enjoy your game.",
        icon: "⚽",
      },
      {
        step: "6",
        title: "Review & Earn Rewards",
        description:
          "Rate the facility and earn reward points for future bookings.",
        icon: "⭐",
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
          Step {item.step}: {item.title}
        </h3>
        <p className="text-gray-200">{item.description}</p>
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default HowWork;
