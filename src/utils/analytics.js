import ReactGA from "react-ga4";

// Check if user has consented to analytics
const hasConsented = () => {
  return localStorage.getItem("analytics-consent") === "true";
};

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (measurementId && typeof window !== "undefined") {
    // Initialize with more privacy-focused settings
    ReactGA.initialize(measurementId, {
      gaOptions: {
        anonymizeIp: true,
        cookieExpires: 60 * 60 * 24 * 90, // 90 days
      },
    });
    console.log("Google Analytics initialized with ID:", measurementId);
  }
};

// Track page views
export const logPageView = () => {
  if (typeof window !== "undefined" && hasConsented()) {
    const currentPath = window.location.pathname + window.location.search;
    ReactGA.send({ hitType: "pageview", page: currentPath });

    if (process.env.NODE_ENV !== "production") {
      console.log("Page viewed:", currentPath);
    }
  }
};

// Track events
export const logEvent = (category, action, label = null, value = null) => {
  if (typeof window !== "undefined" && hasConsented()) {
    const eventParams = {
      category,
      action,
    };

    if (label) {
      eventParams.label = label;
    }

    if (value !== null) {
      eventParams.value = value;
    }

    ReactGA.event(eventParams);

    if (process.env.NODE_ENV !== "production") {
      console.log("Event logged:", eventParams);
    }
  }
};
