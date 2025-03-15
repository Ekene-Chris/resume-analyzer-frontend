import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { cvService } from "../services/apiService";
import {
  FaSpinner,
  FaExclamationTriangle,
  FaDownload,
  FaChartBar,
  FaListUl,
  FaAlignLeft,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const AnalysisResults = () => {
  const { analysisId } = useParams();

  const {
    data: analysis,
    error,
    isLoading,
  } = useQuery(["analysisResults", analysisId], () =>
    cvService.getAnalysisResults(analysisId)
  );

  if (isLoading) {
    return (
      <div className="card text-center">
        <div className="animate-spin text-4xl text-primary-600 mb-4 inline-block">
          <FaSpinner />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Loading Results...
        </h2>
        <p className="text-gray-600">
          Please wait while we fetch your analysis results.
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
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error Loading Results
        </h2>
        <p className="mb-4 text-red-500">
          {error.response?.data?.detail ||
            error.message ||
            "An error occurred while loading analysis results"}
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    );
  }

  // Generate PDF download URL
  const pdfUrl = cvService.getAnalysisPdf(analysisId);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-primary-700 text-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resume Analysis Results</h1>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-primary-700 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            <FaDownload className="mr-2" /> Download PDF
          </a>
        </div>
      </div>

      {/* Overall Score */}
      <div className="p-6 border-b">
        <div className="flex items-center mb-4">
          <FaChartBar className="text-2xl text-primary-600 mr-2" />
          <h2 className="text-xl font-bold">Overall Assessment</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            {analysis.overall_score >= 80 ? (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">
                Excellent match for the role
              </div>
            ) : analysis.overall_score >= 60 ? (
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg inline-block">
                Good match with improvements needed
              </div>
            ) : (
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg inline-block">
                Significant improvements needed
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="relative inline-flex justify-center items-center">
              <svg className="w-24 h-24">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                />
                <circle
                  className={`${
                    analysis.overall_score >= 80
                      ? "text-green-500"
                      : analysis.overall_score >= 60
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                  strokeWidth="8"
                  strokeDasharray={250}
                  strokeDashoffset={250 - (analysis.overall_score / 100) * 250}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="48"
                  cy="48"
                />
              </svg>
              <span className="absolute text-xl font-bold">
                {analysis.overall_score}/100
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-bold text-gray-700 mb-2">Executive Summary:</h3>
          <p className="text-gray-600">{analysis.summary}</p>
        </div>
      </div>

      {/* Detailed Categories */}
      <div className="p-6 border-b">
        <div className="flex items-center mb-4">
          <FaListUl className="text-2xl text-primary-600 mr-2" />
          <h2 className="text-xl font-bold">Detailed Analysis</h2>
        </div>

        <div className="space-y-6">
          {analysis.categories.map((category, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div
                className={`p-4 flex justify-between items-center
                ${
                  category.score >= 80
                    ? "bg-green-100"
                    : category.score >= 60
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }`}
              >
                <h3 className="font-bold">{category.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-white
                  ${
                    category.score >= 80
                      ? "bg-green-600"
                      : category.score >= 60
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }`}
                >
                  {category.score}/100
                </span>
              </div>
              <div className="p-4 bg-white">
                <p className="mb-4">{category.feedback}</p>
                {category.suggestions.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-2">Suggestions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {category.suggestions.map((suggestion, idx) => (
                        <li key={idx} className="text-gray-700">
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyword Analysis */}
      <div className="p-6 border-b">
        <div className="flex items-center mb-4">
          <FaAlignLeft className="text-2xl text-primary-600 mr-2" />
          <h2 className="text-xl font-bold">Keyword Analysis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-green-600 mb-2 flex items-center">
              <FaCheck className="mr-1" /> Present Keywords
            </h3>
            {analysis.keyword_analysis.present.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analysis.keyword_analysis.present.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No keywords detected</p>
            )}
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-red-600 mb-2 flex items-center">
              <FaTimes className="mr-1" /> Missing Keywords
            </h3>
            {analysis.keyword_analysis.missing.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analysis.keyword_analysis.missing.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                No missing critical keywords
              </p>
            )}
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-primary-600 mb-2">
              Recommended Keywords
            </h3>
            {analysis.keyword_analysis.recommended.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analysis.keyword_analysis.recommended.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">
                No additional recommendations
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Matrix Alignment */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold mb-4">
          Global DevOps Competency Matrix Alignment
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <div className="border rounded-lg p-4 flex-1">
            <h3 className="font-bold mb-2">Current Level Assessment</h3>
            <p className="text-lg text-primary-700 capitalize">
              {analysis.matrix_alignment.current_level}
            </p>
          </div>
          <div className="border rounded-lg p-4 flex-1">
            <h3 className="font-bold mb-2">Target Level</h3>
            <p className="text-lg text-primary-700 capitalize">
              {analysis.matrix_alignment.target_level}
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-bold mb-2">Gap Areas to Address</h3>
          {analysis.matrix_alignment.gap_areas.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1">
              {analysis.matrix_alignment.gap_areas.map((gap, idx) => (
                <li key={idx} className="text-gray-700">
                  {gap}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">
              No significant gaps identified
            </p>
          )}
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Recommended Next Steps</h2>

        <div className="bg-primary-50 p-4 rounded-lg">
          <p className="mb-4">
            To improve your resume and align it better with industry
            expectations:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Address the identified gap areas in your skills and experience
            </li>
            <li>Add the missing keywords highlighted in the analysis</li>
            <li>Quantify your achievements with metrics where possible</li>
            <li>
              Restructure your experience descriptions based on the feedback
            </li>
            <li>Consider taking courses to fill skill gaps</li>
          </ol>

          <div className="mt-6 bg-gradient-to-r from-primary-700 to-primary-900 text-white p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">
              Accelerate Your Career with Teleios
            </h3>
            <p className="mb-4">
              Teleios is an exclusive tech learning platform designed by Ekene
              Chris to help ambitious engineers close skill gaps and compete
              globally.
            </p>
            <a
              href="https://jointeleios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-700 px-4 py-2 rounded hover:bg-gray-100 transition font-bold"
            >
              Learn More About Teleios
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Link to="/" className="btn btn-secondary">
            Analyze Another Resume
          </Link>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaDownload className="mr-2 inline-block" /> Download PDF Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
