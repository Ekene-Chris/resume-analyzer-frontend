import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
// Import your logo
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-caput-mortuum text-white shadow-md relative z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            {/* Logo */}
            <img src={logo} alt="Ekene Chris Logo" className="h-10 mr-3" />
            <div>
              <span className="text-xl font-bold">AI Resume Analyzer</span>
              <span className="block text-xs md:text-sm text-gold">
                by Ekene Chris
              </span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gold transition duration-200">
              Home
            </Link>
            <a
              href="https://ekenechris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition duration-200"
            >
              About
            </a>
            <a
              href="https://jointeleios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition duration-200"
            >
              Teleios
            </a>
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://linkedin.com/in/ekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition duration-200"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition duration-200"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-caput-mortuum-800 py-4 px-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="https://ekenechris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://jointeleios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:text-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Teleios
            </a>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://linkedin.com/in/ekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition duration-200"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition duration-200"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
