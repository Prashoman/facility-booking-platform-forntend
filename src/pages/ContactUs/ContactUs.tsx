import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 flex flex-col items-center py-10 px-4">
  
    <h1 className="text-4xl font-bold text-white mb-6 text-center">
      Contact Us
    </h1>
    <p className="text-lg text-blue-100 mb-10 text-center">
      We’d love to hear from you! Whether you have questions, feedback, or
      need assistance, feel free to reach out.
    </p>
  
    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      {/* Contact Form */}
      <div className="bg-blue-700 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-blue-600 text-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-blue-600 text-white"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-blue-600 text-white"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full p-3 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-blue-600 text-white"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
  
      <div className="space-y-8">
        {/* Contact Details */}
        <div className="bg-blue-600 shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Contact Details
          </h2>
          <p className="text-blue-100 mb-4">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-blue-100 mb-4">
            <strong>Email:</strong> support@example.com
          </p>
          <p className="text-blue-100">
            <strong>Address:</strong> Mirpur 10, Dhaka, Bangladesh
          </p>
        </div>
  
        {/* Map Section */}
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29203.532330954837!2d90.3542346906386!3d23.802893098165733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1737307112793!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ContactUs;
