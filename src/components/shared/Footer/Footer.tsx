const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 shadow-xl ">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Sports Facility Booking</h3>
            <p className="text-gray-300 mb-4">
              The easiest way to book your favorite sports facility.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            {/* Links */}
            <a
              href="/about-us"
              className="hover:text-yellow-500 transition duration-300"
            >
              About Us
            </a>
            <a
              href="/contact-us"
              className="hover:text-yellow-500 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/facility"
              className="hover:text-yellow-500 transition duration-300"
            >
              Facility
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300 hover:text-yellow-500 transition duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0 5.523-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2s10 4.478 10 10zm-13 1h2v7h-2v-7zm1-4c-.552 0-1-.448-1-1 0-.552.448-1 1-1s1 .448 1 1c0 .552-.448 1-1 1z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300 hover:text-yellow-500 transition duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.06c-.77.345-1.598.577-2.465.68.887-.528 1.56-1.36 1.879-2.356-.828.49-1.747.85-2.715 1.04-.78-.83-1.89-1.344-3.12-1.344-2.59 0-4.693 2.125-4.693 4.746 0 .37.046.734.135 1.08-3.897-.199-7.343-2.065-9.645-4.902-.402.689-.632 1.484-.632 2.34 0 1.614.82 3.043 2.074 3.876-.748-.023-1.458-.228-2.08-.568v.057c0 2.262 1.63 4.142 3.79 4.58-.396.109-.814.168-1.234.168-.301 0-.594-.027-.88-.084.594 1.853 2.32 3.191 4.357 3.23-1.598 1.25-3.61 2.015-5.813 2.015-.378 0-.749-.022-1.118-.067 2.07 1.324 4.54 2.094 7.24 2.094 8.688 0 13.438-7.23 13.438-13.495 0-.205-.005-.409-.015-.612C21.166 6.539 21.582 5.84 22 5.06z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300 hover:text-yellow-500 transition duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.16c3.2 0 3.573.012 4.832.07 1.195.058 1.96.253 2.419.423a4.88 4.88 0 0 1 1.65 1.651c.17.46.365 1.225.423 2.419.058 1.259.07 1.633.07 4.832s-.012 3.573-.07 4.832c-.058 1.195-.253 1.96-.423 2.419a4.88 4.88 0 0 1-1.65 1.65c-.46.17-1.225.365-2.419.423-1.259.058-1.632.07-4.832.07s-3.573-.012-4.832-.07c-1.195-.058-1.96-.253-2.419-.423a4.88 4.88 0 0 1-1.65-1.65c-.17-.46-.365-1.225-.423-2.419-.058-1.259-.07-1.633-.07-4.832s.012-3.573.07-4.832c.058-1.195.253-1.96.423-2.419a4.88 4.88 0 0 1 1.65-1.65c.46-.17 1.225-.365 2.419-.423 1.259-.058 1.633-.07 4.832-.07zm0 1.75c-3.111 0-3.452.012-4.663.07-1.171.057-1.94.239-2.452.373-.552.134-.963.322-1.404.763-.44.44-.63.852-.763 1.404-.134.512-.316 1.281-.373 2.452-.058 1.211-.07 1.552-.07 4.663 0 3.111.012 3.452.07 4.663.057 1.171.239 1.94.373 2.452.134.552.322.963.763 1.404.44.44.852.63 1.404.763.512.134 1.281.316 2.452.373 1.211.058 1.552.07 4.663.07 3.111 0 3.452-.012 4.663-.07 1.171-.057 1.94-.239 2.452-.373.552-.134.963-.322 1.404-.763.44-.44.63-.852.763-1.404.134-.512.316-1.281.373-2.452.058-1.211.07-1.552.07-4.663 0-3.111-.012-3.452-.07-4.663-.057-1.171-.239-1.94-.373-2.452-.134-.552-.322-.963-.763-1.404-.44-.44-.852-.63-1.404-.763-.512-.134-1.281-.316-2.452-.373-1.211-.058-1.552-.07-4.663-.07z" />
              </svg>
            </a>
          </div>
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
