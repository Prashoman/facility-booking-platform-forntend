const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-blue-900 to-gray-900 text-slate-50 py-8 shadow-lg">
        <div className="container mx-auto text-center">
          {/* Logo & Description */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Sports Facility Booking</h3>
            <p className="text-slate-300 text-sm">
              The easiest way to book your favorite sports facility.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-6 mb-6">
            {["About Us", "Contact Us", "Facility"].map((link, index) => (
              <a
                key={index}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-yellow-400 transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            {[
              { href: "https://facebook.com", icon: "facebook" },
              { href: "https://twitter.com", icon: "twitter" },
              { href: "https://instagram.com", icon: "instagram" },
            ].map(({ href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-300 hover:text-yellow-400 transition duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Add appropriate SVG paths for icons */}
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-6">
            <p className="text-gray-300 text-sm">
              &copy; 2025 Sports Facility Booking. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
