import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AnalysisStatus from "./pages/AnalysisStatus";
import AnalysisResults from "./pages/AnalysisResults";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import CookieConsent from "./components/CookieConsent";
import { initGA, logPageView } from "./utils/analytics";

// Your Google Analytics measurement ID from environment variables
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Create a query client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Page tracker component
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Only log page view if user has consented
    const hasConsented = localStorage.getItem("analytics-consent") === "true";
    if (hasConsented) {
      logPageView();
    }
  }, [location]);

  return null;
};

function App() {
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false);

  useEffect(() => {
    // Check for user consent before initializing analytics
    const hasConsented = localStorage.getItem("analytics-consent") === "true";

    if (GA_MEASUREMENT_ID && hasConsented) {
      // Initialize Google Analytics if user has consented
      initGA(GA_MEASUREMENT_ID);
      setAnalyticsInitialized(true);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageTracker /> {/* Add this to track page views */}
        <div className="flex flex-col min-h-screen bg-linen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/analysis/:analysisId/status"
                element={<AnalysisStatus />}
              />
              <Route
                path="/analysis/:analysisId/results"
                element={<AnalysisResults />}
              />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
