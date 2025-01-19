import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-100">About Us</h1>
        <p className="text-lg text-gray-200 mt-4">
          Learn more about our journey, mission, and the passionate team behind
          our platform.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="bg-gray-700 shadow-md rounded-lg p-8 max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-50">
          At <strong>Sportify</strong>, our mission is to make sports facility
          booking effortless and accessible for everyone. Whether you’re an
          athlete, a fitness enthusiast, or someone looking for a casual game,
          we aim to connect you to the best sports venues with ease. We value
          community, health, and the joy of sports.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto mb-12 px-4 lg:px-20">
        <h2 className="text-2xl font-semibold text-gray-100 text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "CEO & Founder",
              img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=faces&fit=crop&h=200&w=200",
            },
            {
              name: "Emily Carter",
              role: "Chief Marketing Officer",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&h=200&w=200",
            },
            {
              name: "James Smith",
              role: "Head of Product",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&h=200&w=200",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-600 shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-medium text-gray-100">
                {member.name}
              </h3>
              <p className="text-sm text-gray-200">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History & Milestones */}
      <section className="bg-gray-700 shadow-md rounded-lg p-8 max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Our Journey
        </h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="w-14 h-14 flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              2015
            </span>
            <p className="ml-4 text-gray-200">
              <strong>Sportify</strong> was founded with the vision to simplify
              booking sports facilities in local communities.
            </p>
          </div>
          <div className="flex items-center">
            <span className="w-14 h-14 flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              2018
            </span>
            <p className="ml-4 text-gray-200">
              Expanded to over 50 cities, offering partnerships with hundreds of
              sports facilities.
            </p>
          </div>
          <div className="flex items-center">
            <span className="w-14 h-14 flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              2023
            </span>
            <p className="ml-4 text-gray-200">
              Launched the mobile app, making it easier for users to book
              facilities on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-600 shadow-md rounded-lg p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-200 mb-4">
          We’d love to hear from you! Here’s how you can get in touch:
        </p>
        <ul className="space-y-4 text-gray-200">
          <li>
            <strong>Office Address:</strong> Mirpur-10 Dhaka Bangladesh
          </li>
          <li>
            <strong>Phone:</strong> (123) 456-7890
          </li>
          <li>
            <strong>Email:</strong> contact@sportify.com
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
