import axios from "axios";

// Ensure base URL includes /api
const baseApiUrl = import.meta.env.VITE_API_URL;

// Log the API URL to help with debugging
console.log("API URL:", baseApiUrl);

// Create axios instance with proper base URL
const apiClient = axios.create({
  baseURL: baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const cvService = {
  // Upload resume for analysis
  uploadResume: async (formData) => {
    try {
      // Log what we're calling for debugging
      console.log(`Sending resume to: ${baseApiUrl}/cv/upload`);

      const response = await apiClient.post("/cv/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading resume:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
      throw error; // Re-throw so the component can handle it
    }
  },

  // Get analysis status
  getAnalysisStatus: async (analysisId) => {
    try {
      const response = await apiClient.get(`/cv/${analysisId}/status`);
      return response.data;
    } catch (error) {
      console.error("Error getting analysis status:", error);
      throw error;
    }
  },

  // Get analysis results
  getAnalysisResults: async (analysisId) => {
    try {
      const response = await apiClient.get(`/cv/${analysisId}`);
      return response.data;
    } catch (error) {
      console.error("Error getting analysis results:", error);
      throw error;
    }
  },

  // Download analysis PDF
  getAnalysisPdf: (analysisId) => {
    return `${baseApiUrl}/cv/${analysisId}/pdf`;
  },
};

export default apiClient;
