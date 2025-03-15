const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">AI Resume Analyzer</h3>
            <p className="text-gray-400">
              Powered by Azure OpenAI and the Global DevOps Competency Matrix
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {currentYear} Ekene Chris | DevOps Career Acceleration
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
              <a
                href="https://ekenechris.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Website
              </a>
              <a
                href="https://linkedin.com/in/ekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/ekenechris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
