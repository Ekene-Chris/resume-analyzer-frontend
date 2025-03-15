import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cvService } from "../services/apiService";

const ResumeUpload = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [targetRole, setTargetRole] = useState("devops_engineer");
  const [experienceLevel, setExperienceLevel] = useState("mid");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !file) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Create form data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("file", file);
      formData.append("target_role", targetRole);
      formData.append("experience_level", experienceLevel);

      // Upload the resume and get analysis ID
      const response = await cvService.uploadResume(formData);

      // Redirect to the status page
      navigate(`/analysis/${response.analysis_id}/status`);
    } catch (err) {
      setError(`Upload failed: ${err.response?.data?.detail || err.message}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 className="text-2xl font-bold text-center mb-6">
        AI Resume Analyzer
      </h2>

      {error && <div className="form-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="targetRole" className="form-label">
            Target Role
          </label>
          <select
            id="targetRole"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            className="form-select"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="experienceLevel" className="form-label">
            Experience Level
          </label>
          <select
            id="experienceLevel"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="form-select"
          >
            {experienceLevels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="resume" className="form-label">
            Upload Resume (PDF, DOCX) *
          </label>
          <input
            type="file"
            id="resume"
            onChange={handleFileChange}
            className="form-input"
            accept=".pdf,.docx,.doc"
            required
          />
          <p className="mt-1 text-xs text-gray-500">Max file size: 10MB</p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full btn ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "btn-primary"
          }`}
        >
          {isLoading ? "Uploading..." : "Analyze Resume"}
        </button>
      </form>
    </div>
  );
};

export default ResumeUpload;
