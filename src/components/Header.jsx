import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          AI Resume Analyzer
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-primary-200 transition">
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://jointeleios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition"
              >
                About Teleios
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
