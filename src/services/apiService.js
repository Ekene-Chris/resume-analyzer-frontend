import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const cvService = {
  // Upload resume for analysis
  uploadResume: async (formData) => {
    const response = await apiClient.post("/cv/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  // Get analysis status
  getAnalysisStatus: async (analysisId) => {
    const response = await apiClient.get(`/cv/${analysisId}/status`);
    return response.data;
  },

  // Get analysis results
  getAnalysisResults: async (analysisId) => {
    const response = await apiClient.get(`/cv/${analysisId}`);
    return response.data;
  },

  // Download analysis PDF
  getAnalysisPdf: (analysisId) => {
    return `${import.meta.env.VITE_API_URL}/cv/${analysisId}/pdf`;
  },
};

export default apiClient;
