import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { cvService } from "../services/apiService";
import {
  FaSpinner,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const AnalysisStatus = () => {
  const { analysisId } = useParams();
  const navigate = useNavigate();

  // Poll the status endpoint
  const {
    data: analysis,
    error,
    isLoading,
  } = useQuery(
    ["analysisStatus", analysisId],
    () => cvService.getAnalysisStatus(analysisId),
    {
      refetchInterval: (data) => (data?.status === "processing" ? 3000 : false),
      onSuccess: (data) => {
        // If analysis is completed, redirect to results page
        if (data.status === "completed") {
          navigate(`/analysis/${analysisId}/results`);
        }
      },
    }
  );

  if (isLoading) {
    return (
      <div className="card text-center">
        <div className="animate-spin text-4xl text-primary-600 mb-4 inline-block">
          <FaSpinner />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Initializing Analysis...
        </h2>
        <p className="text-gray-600">
          Please wait while we connect to the server.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card text-center">
        <div className="text-4xl text-red-600 mb-4 inline-block">
          <FaExclamationTriangle />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">Analysis Error</h2>
        <p className="mb-4 text-red-500">
          {error.response?.data?.detail ||
            error.message ||
            "An error occurred while checking analysis status"}
        </p>
        <div className="p-3 bg-red-50 border border-red-200 rounded mb-4">
          <p className="text-sm text-gray-700">
            There was an error processing your resume. This could be due to:
          </p>
          <ul className="text-sm text-gray-700 list-disc ml-5 mt-2">
            <li>File format issues (make sure it's a readable PDF or DOCX)</li>
            <li>Text extraction problems (avoid image-based PDFs)</li>
            <li>Service availability issues</li>
          </ul>
        </div>
        <Link to="/" className="btn btn-primary">
          Try Again
        </Link>
      </div>
    );
  }

  if (analysis?.status === "failed") {
    return (
      <div className="card text-center">
        <div className="text-4xl text-red-600 mb-4 inline-block">
          <FaExclamationTriangle />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Analysis Failed
        </h2>
        <p className="mb-4 text-red-500">
          {analysis.error || "An unknown error occurred during analysis."}
        </p>
        <div className="p-3 bg-red-50 border border-red-200 rounded mb-4">
          <p className="text-sm text-gray-700">
            There was an error analyzing your resume. This could be due to:
          </p>
          <ul className="text-sm text-gray-700 list-disc ml-5 mt-2">
            <li>File format issues (make sure it's a readable PDF or DOCX)</li>
            <li>Text extraction problems (avoid image-based PDFs)</li>
            <li>Service availability issues</li>
          </ul>
        </div>
        <Link to="/" className="btn btn-primary">
          Try Again
        </Link>
      </div>
    );
  }

  if (analysis?.status === "completed") {
    return (
      <div className="card text-center">
        <div className="text-4xl text-green-600 mb-4 inline-block">
          <FaCheckCircle />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Analysis Complete!
        </h2>
        <p className="mb-4">Your resume analysis is ready to view.</p>
        <Link
          to={`/analysis/${analysisId}/results`}
          className="btn btn-primary"
        >
          View Results
        </Link>
      </div>
    );
  }

  // Default case: show processing status
  return (
    <div className="card text-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Analyzing Your Resume...
      </h2>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-primary-600 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(analysis?.progress || 0) * 100}%` }}
        ></div>
      </div>
      <p className="text-gray-600 mb-4">
        Estimated time remaining:{" "}
        {analysis?.estimated_time_remaining || "calculating..."} seconds
      </p>

      <div className="p-4 bg-primary-50 rounded-lg mt-6">
        <h3 className="font-bold text-primary-700 mb-2">What's happening?</h3>
        <ul className="text-sm text-gray-700 list-disc ml-5 space-y-2">
          <li>Extracting text from your resume</li>
          <li>Analyzing skills and experience against role requirements</li>
          <li>Identifying keyword optimization opportunities</li>
          <li>Evaluating against the Global DevOps Competency Matrix</li>
          <li>Generating tailored improvement recommendations</li>
        </ul>
      </div>
    </div>
  );
};

export default AnalysisStatus;
