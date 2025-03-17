import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center mt-12">
      <div className="text-deep-black-800 text-6xl font-bold mb-2">404</div>
      <div className="text-5xl text-gold mb-6 inline-block">
        <FaExclamationTriangle />
      </div>
      <h2 className="text-2xl font-bold text-deep-black-800 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-deep-black-800 hover:bg-deep-black-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center text-lg"
      >
        <FaHome className="mr-2" /> Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
