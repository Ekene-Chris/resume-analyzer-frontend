import ResumeUpload from "../components/ResumeUpload";
import { FaCloudUploadAlt, FaChartLine, FaFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-700 mb-4">
          AI-Powered Resume Analysis
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get expert feedback on your tech resume, aligned with the Global
          DevOps Competency Matrix and tailored for tech professionals seeking
          to excel globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-primary-600 text-4xl mb-4 flex justify-center">
            <FaCloudUploadAlt />
          </div>
          <h3 className="text-xl font-bold mb-2">Upload Your Resume</h3>
          <p className="text-gray-600">
            Submit your resume in PDF or DOCX format along with your target role
            and experience level.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-primary-600 text-4xl mb-4 flex justify-center">
            <FaChartLine />
          </div>
          <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
          <p className="text-gray-600">
            Our AI analyzes your resume against industry standards and
            role-specific requirements.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-primary-600 text-4xl mb-4 flex justify-center">
            <FaFileAlt />
          </div>
          <h3 className="text-xl font-bold mb-2">Get Detailed Feedback</h3>
          <p className="text-gray-600">
            Receive actionable insights to improve your resume and increase your
            chances of landing your dream role.
          </p>
        </div>
      </div>

      <ResumeUpload />

      <div className="mt-16 bg-primary-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-primary-700 mb-4 text-center">
          Why Use Our AI Resume Analyzer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-600">
              Industry Aligned Analysis
            </h3>
            <p className="text-gray-700">
              Our AI uses the Global DevOps Competency Matrix to evaluate your
              resume against industry standards and role-specific requirements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-600">
              Tailored Recommendations
            </h3>
            <p className="text-gray-700">
              Get specific feedback on how to improve your resume for your
              target role and experience level.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-600">
              Keyword Optimization
            </h3>
            <p className="text-gray-700">
              Learn which essential keywords are missing from your resume and
              how to incorporate them effectively.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary-600">
              Global Perspective
            </h3>
            <p className="text-gray-700">
              Receive feedback designed to help you compete in the global tech
              marketplace, not just your local region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
