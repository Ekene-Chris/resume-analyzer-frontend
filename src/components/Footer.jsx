import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe } from "react-icons/fa";
// Import your logo
import logo from "../assets/images/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-deep-black-800 border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <img src={logo} alt="Ekene Chris Logo" className="h-12 mr-3" />
              <div>
                <span className="font-bold text-lg">Ekene Chris</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Technology Architect & Educator empowering engineers to excel in
              the global tech landscape.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ekene-chris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/iamekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Ekene-Chris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://ekenechris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition"
              >
                <FaGlobe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-deep-black-800 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://ekenechris.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-deep-black-800 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://ekenechris.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-deep-black-800 transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-gold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://jointeleios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-deep-black-800 transition"
                >
                  Teleios Platform
                </a>
              </li>
              <li>
                <a
                  href="https://ekenechris.com/engineering-excellence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-deep-black-800 transition"
                >
                  Engineering Excellence
                </a>
              </li>
              <li>
                <a
                  href="https://ekenechris.com/mentorship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-deep-black-800 transition"
                >
                  Mentorship
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-gold">
              Join My Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Get the latest career advancement tips and technical insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full bg-gray-100 border border-gray-200 text-gray-800 rounded-l focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-caput-mortuum hover:bg-caput-mortuum-700 text-white px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Brand Values */}
        <div className="py-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Innovation · Mentorship · Adaptability · Growth · Excellence
          </p>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Ekene Chris. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <a
              href="https://ekenechris.com/privacy"
              className="text-sm text-gray-500 hover:text-gray-700 mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="https://ekenechris.com/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
