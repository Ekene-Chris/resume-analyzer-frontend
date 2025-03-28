import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloudUploadAlt,
  FaSpinner,
  FaExclamationCircle,
} from "react-icons/fa";
import { cvService } from "../services/apiService";
import { logEvent } from "../utils/analytics"; // Import analytics

const ResumeUpload = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [targetRole, setTargetRole] = useState("devops_engineer");
  const [experienceLevel, setExperienceLevel] = useState("mid");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const roles = [
    { id: "devops_engineer", name: "DevOps Engineer" },
    { id: "cloud_architect", name: "Cloud Architect" },
    { id: "backend_developer", name: "Backend Developer" },
    { id: "frontend_developer", name: "Frontend Developer" },
  ];

  const experienceLevels = [
    { id: "junior", name: "Junior (0-2 years)" },
    { id: "mid", name: "Mid-Level (3-5 years)" },
    { id: "senior", name: "Senior (6+ years)" },
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);

      // Track file selection event
      logEvent("Resume", "FileSelected", `FileType: ${selectedFile.type}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!file) {
      setError("Please upload your resume");
      return;
    }

    setIsLoading(true);

    try {
      // Track form submission attempt
      logEvent(
        "Resume",
        "SubmissionAttempt",
        `Role: ${targetRole}, Level: ${experienceLevel}`
      );

      // Create form data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("file", file);
      formData.append("target_role", targetRole);
      formData.append("experience_level", experienceLevel);

      // Upload the resume and get analysis ID
      const response = await cvService.uploadResume(formData);

      // Track successful submission
      logEvent(
        "Resume",
        "SubmissionSuccess",
        `AnalysisID: ${response.analysis_id}`
      );

      // Redirect to the status page
      navigate(`/analysis/${response.analysis_id}/status`);
    } catch (err) {
      // Track submission error
      logEvent(
        "Resume",
        "SubmissionError",
        `Error: ${err.response?.data?.detail || err.message}`
      );

      setError(`Upload failed: ${err.response?.data?.detail || err.message}`);
      setIsLoading(false);
    }
  };

  // Track role selection changes
  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setTargetRole(newRole);
    logEvent("Resume", "RoleSelected", newRole);
  };

  // Track experience level changes
  const handleExperienceLevelChange = (e) => {
    const newLevel = e.target.value;
    setExperienceLevel(newLevel);
    logEvent("Resume", "ExperienceLevelSelected", newLevel);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-deep-black-800 text-white p-6">
        <h2 className="text-2xl font-bold flex items-center">
          <FaCloudUploadAlt className="mr-2" /> Upload Your Resume
        </h2>
        <p className="mt-2 text-gold">
          Get AI-powered feedback based on industry standards
        </p>
      </div>

      <div className="p-6">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
            <FaExclamationCircle className="mt-1 mr-2 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300 focus:border-deep-black-700 transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300 focus:border-deep-black-700 transition"
                required
              />
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="targetRole"
                className="block text-gray-700 font-medium mb-2"
              >
                Target Role
              </label>
              <select
                id="targetRole"
                value={targetRole}
                onChange={handleRoleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300 focus:border-deep-black-700 transition appearance-none bg-white"
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="experienceLevel"
                className="block text-gray-700 font-medium mb-2"
              >
                Experience Level
              </label>
              <select
                id="experienceLevel"
                value={experienceLevel}
                onChange={handleExperienceLevelChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-300 focus:border-deep-black-700 transition appearance-none bg-white"
              >
                {experienceLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Upload Resume <span className="text-red-500">*</span>
            </label>

            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-deep-black-700 transition cursor-pointer bg-gray-50">
              <input
                type="file"
                id="resume"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept=".pdf,.docx,.doc"
                required
              />

              <div className="space-y-3">
                <div className="text-caput-mortuum text-5xl flex justify-center">
                  <FaCloudUploadAlt />
                </div>

                {fileName ? (
                  <div>
                    <p className="text-sm text-gray-500">Selected file:</p>
                    <p className="font-medium text-deep-black-800">
                      {fileName}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="font-medium text-lg">
                      Drag your resume here or click to browse
                    </p>
                    <p className="text-xs text-gray-500">
                      Supports PDF, DOCX (Max 10MB)
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-gray-500">
              Your data is securely processed and never shared.
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-4 rounded-lg font-medium text-lg flex items-center ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-deep-black-800 hover:bg-deep-black-700 text-white"
              } transition shadow-md`}
              onClick={() => {
                if (!isLoading) {
                  logEvent("Resume", "SubmitButtonClicked");
                }
              }}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" /> Processing...
                </>
              ) : (
                "Analyze Resume"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeUpload;
