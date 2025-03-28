import { useState, useEffect } from "react";
import { FaCookieBite, FaTimes } from "react-icons/fa";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("analytics-consent");
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("analytics-consent", "true");
    setShowBanner(false);

    // If you want to reload the page to enable analytics after consent
    window.location.reload();
  };

  const declineCookies = () => {
    localStorage.setItem("analytics-consent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaCookieBite className="text-caput-mortuum text-xl mr-3" />
            <p className="text-gray-700 pr-4">
              We use cookies to analyze website traffic and optimize your
              experience. By accepting, you consent to our use of analytics
              cookies in accordance with our
              <a href="/privacy" className="text-deep-black-800 underline ml-1">
                privacy policy
              </a>
              .
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-deep-black-800 text-white rounded-lg hover:bg-deep-black-700"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
