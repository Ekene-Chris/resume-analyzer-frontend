import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AnalysisStatus from "./pages/AnalysisStatus";
import AnalysisResults from "./pages/AnalysisResults";
import NotFound from "./pages/NotFound";

// Create a query client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
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
