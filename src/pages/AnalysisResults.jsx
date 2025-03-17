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
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="animate-spin text-5xl text-deep-black-800 mb-6 inline-block">
          <FaSpinner />
        </div>
        <h2 className="text-2xl font-bold text-deep-black-800 mb-4">
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
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-5xl text-red-600 mb-6 inline-block">
          <FaExclamationTriangle />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error Loading Results
        </h2>
        <p className="mb-6 text-red-500">
          {error.response?.data?.detail ||
            error.message ||
            "An error occurred while loading analysis results"}
        </p>
        <Link
          to="/"
          className="bg-deep-black-800 hover:bg-deep-black-700 text-white font-bold py-3 px-8 rounded-lg inline-block text-lg"
        >
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
      <div className="bg-deep-black-800 text-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resume Analysis Results</h1>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-deep-black-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FaDownload className="mr-2" /> Download PDF
          </a>
        </div>
      </div>

      {/* Overall Score */}
      <div className="p-6 border-b">
        <div className="flex items-center mb-4">
          <FaChartBar className="text-2xl text-deep-black-800 mr-2" />
          <h2 className="text-xl font-bold">Overall Assessment</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            {analysis.overall_score >= 80 ? (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block font-medium">
                Excellent match for the role
              </div>
            ) : analysis.overall_score >= 60 ? (
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg inline-block font-medium">
                Good match with improvements needed
              </div>
            ) : (
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg inline-block font-medium">
                Significant improvements needed
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="relative inline-flex justify-center items-center">
              <svg className="w-32 h-32">
                <circle
                  className="text-gray-200"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="64"
                  cy="64"
                />
                <circle
                  className={`${
                    analysis.overall_score >= 80
                      ? "text-green-500"
                      : analysis.overall_score >= 60
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                  strokeWidth="10"
                  strokeDasharray={315}
                  strokeDashoffset={315 - (analysis.overall_score / 100) * 315}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="64"
                  cy="64"
                />
              </svg>
              <span className="absolute text-2xl font-bold">
                {analysis.overall_score}/100
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-deep-black-800 mb-2 text-lg">
            Executive Summary:
          </h3>
          <p className="text-gray-700">{analysis.summary}</p>
        </div>
      </div>

      {/* Detailed Categories */}
      <div className="p-6 border-b">
        <div className="flex items-center mb-6">
          <FaListUl className="text-2xl text-deep-black-800 mr-2" />
          <h2 className="text-xl font-bold">Detailed Analysis</h2>
        </div>

        <div className="space-y-6">
          {analysis.categories.map((category, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
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
                <h3 className="font-bold text-lg">{category.name}</h3>
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
              <div className="p-5 bg-white">
                <p className="mb-4 text-gray-700">{category.feedback}</p>
                {category.suggestions.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-3 text-deep-black-800">
                      Suggestions:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
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
        <div className="flex items-center mb-6">
          <FaAlignLeft className="text-2xl text-deep-black-800 mr-2" />
          <h2 className="text-xl font-bold">Keyword Analysis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-green-600 mb-3 flex items-center text-lg">
              <FaCheck className="mr-2" /> Present Keywords
            </h3>
            {analysis.keyword_analysis.present.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analysis.keyword_analysis.present.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No keywords detected</p>
            )}
          </div>

          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-red-600 mb-3 flex items-center text-lg">
              <FaTimes className="mr-2" /> Missing Keywords
            </h3>
            {analysis.keyword_analysis.missing.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analysis.keyword_analysis.missing.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm"
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

          <div className="border rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-deep-black-800 mb-3 text-lg">
              Recommended Keywords
            </h3>
            {analysis.keyword_analysis.recommended.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {analysis.keyword_analysis.recommended.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-deep-black-800 px-3 py-1 rounded text-sm"
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
        <h2 className="text-xl font-bold mb-6">
          Global DevOps Competency Matrix Alignment
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          <div className="border rounded-lg p-5 shadow-sm flex-1">
            <h3 className="font-bold mb-2 text-lg">Current Level Assessment</h3>
            <p className="text-xl text-deep-black-800 capitalize">
              {analysis.matrix_alignment.current_level}
            </p>
          </div>
          <div className="border rounded-lg p-5 shadow-sm flex-1">
            <h3 className="font-bold mb-2 text-lg">Target Level</h3>
            <p className="text-xl text-deep-black-800 capitalize">
              {analysis.matrix_alignment.target_level}
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-5 shadow-sm">
          <h3 className="font-bold mb-3 text-lg">Gap Areas to Address</h3>
          {analysis.matrix_alignment.gap_areas.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2">
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
        <h2 className="text-xl font-bold mb-6">Recommended Next Steps</h2>

        <div className="bg-linen p-6 rounded-lg shadow-inner mb-8">
          <p className="mb-4 text-deep-black-800">
            To improve your resume and align it better with industry
            expectations:
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li className="text-gray-700">
              Address the identified gap areas in your skills and experience
            </li>
            <li className="text-gray-700">
              Add the missing keywords highlighted in the analysis
            </li>
            <li className="text-gray-700">
              Quantify your achievements with metrics where possible
            </li>
            <li className="text-gray-700">
              Restructure your experience descriptions based on the feedback
            </li>
            <li className="text-gray-700">
              Consider taking courses to fill skill gaps
            </li>
          </ol>

          <div className="mt-8 bg-gradient-to-r from-deep-black-800 to-deep-black-900 text-white p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">
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
              className="inline-block bg-white text-deep-black-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-center"
            >
              Learn More About Teleios
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <Link
            to="/"
            className="bg-caput-mortuum hover:bg-caput-mortuum-700 text-white font-bold py-3 px-8 rounded-lg text-center text-lg"
          >
            Analyze Another Resume
          </Link>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-deep-black-800 hover:bg-deep-black-700 text-white font-bold py-3 px-8 rounded-lg text-center text-lg"
          >
            <FaDownload className="mr-2 inline-block" /> Download PDF Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
