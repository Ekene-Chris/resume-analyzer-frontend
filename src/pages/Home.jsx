import { useState } from "react";
import {
  FaCloudUploadAlt,
  FaChartLine,
  FaFileAlt,
  FaRocket,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";
import ResumeUpload from "../components/ResumeUpload";
// Import your logo
import logo from "../assets/images/logo.svg";

const Home = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);

  return (
    <div className="min-h-screen bg-linen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-deep-black-800 to-deep-black-900 text-white">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI-Powered Resume Analysis for Engineers
            </h1>
            <p className="text-xl mb-8">
              Get expert feedback on your tech resume, tailored for software
              engineers, and discover what it takes to stand out in today's
              competitive tech marketplace.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => setShowUploadForm(true)}
                className="bg-gold hover:bg-gold-600 text-black font-bold py-4 px-10 rounded-lg transition shadow-lg transform hover:scale-105 text-lg"
              >
                Analyze Your Resume Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-full h-full bg-caput-mortuum rounded-lg"></div>
              <div className="relative bg-linen p-8 rounded-lg border-2 border-deep-black shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-deep-black rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-black">
                      Industry-Aligned Analysis
                    </h3>
                    <p className="text-sm text-gray-600">
                      Based on real tech industry standards
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-deep-black rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-black">
                      Keyword Optimization
                    </h3>
                    <p className="text-sm text-gray-600">
                      Stand out to recruiters and ATS systems
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-deep-black rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-black">
                      Targeted Feedback
                    </h3>
                    <p className="text-sm text-gray-600">
                      Role-specific recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-deep-black rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-black">
                      Career Advancement
                    </h3>
                    <p className="text-sm text-gray-600">
                      Clear path to improvement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showUploadForm ? (
        <div className="py-12">
          <ResumeUpload />
        </div>
      ) : (
        <>
          {/* How It Works Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-deep-black-800">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-linen p-6 rounded-lg shadow-md text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold opacity-20 rounded-bl-full"></div>
                  <div className="text-caput-mortuum text-4xl mb-4 flex justify-center">
                    <FaCloudUploadAlt />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-deep-black-800">
                    Upload Your Resume
                  </h3>
                  <p className="text-gray-700">
                    Submit your resume in PDF or DOCX format along with your
                    target role and experience level.
                  </p>
                </div>

                <div className="bg-linen p-6 rounded-lg shadow-md text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold opacity-20 rounded-bl-full"></div>
                  <div className="text-caput-mortuum text-4xl mb-4 flex justify-center">
                    <FaChartLine />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-deep-black-800">
                    AI Analysis
                  </h3>
                  <p className="text-gray-700">
                    Our AI analyzes your resume against industry standards and
                    role-specific requirements for developers, engineers, and
                    tech professionals.
                  </p>
                </div>

                <div className="bg-linen p-6 rounded-lg shadow-md text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold opacity-20 rounded-bl-full"></div>
                  <div className="text-caput-mortuum text-4xl mb-4 flex justify-center">
                    <FaFileAlt />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-deep-black-800">
                    Get Detailed Feedback
                  </h3>
                  <p className="text-gray-700">
                    Receive actionable insights to improve your resume and
                    increase your chances of landing your dream tech role.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Use Our Tool Section */}
          <div className="py-16 bg-linen">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-deep-black-800">
                  Why Use Our AI Resume Analyzer?
                </h2>
                <p className="text-xl text-gray-700">
                  Get expert feedback powered by AI and designed to help you
                  compete in the global tech marketplace.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="bg-deep-black-800 text-white p-3 rounded-lg mr-4">
                      <FaGlobe className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-deep-black-800">
                        Industry Aligned Analysis
                      </h3>
                      <p className="text-gray-700">
                        Our AI evaluates your resume against industry standards
                        and role-specific requirements for frontend, backend,
                        and full-stack engineers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="bg-deep-black-800 text-white p-3 rounded-lg mr-4">
                      <FaRocket className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-deep-black-800">
                        Tailored Recommendations
                      </h3>
                      <p className="text-gray-700">
                        Get specific feedback on how to improve your resume for
                        your target role and experience level.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="bg-deep-black-800 text-white p-3 rounded-lg mr-4">
                      <FaFileAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-deep-black-800">
                        Keyword Optimization
                      </h3>
                      <p className="text-gray-700">
                        Learn which essential keywords are missing from your
                        resume and how to incorporate them effectively to get
                        past ATS systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="bg-deep-black-800 text-white p-3 rounded-lg mr-4">
                      <FaChartLine className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-deep-black-800">
                        Global Perspective
                      </h3>
                      <p className="text-gray-700">
                        Receive feedback designed to help you compete in the
                        global tech marketplace, not just your local region.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowUploadForm(true)}
                  className="bg-deep-black-800 hover:bg-deep-black-700 text-white font-bold py-4 px-10 rounded-lg transition shadow-lg text-lg"
                >
                  Analyze Your Resume
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-12 bg-gradient-to-r from-deep-black-800 to-deep-black-900 text-white">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to enhance your tech resume?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get expert analysis and actionable feedback to help you stand
                out in the global tech marketplace.
              </p>
              <button
                onClick={() => setShowUploadForm(true)}
                className="bg-gold hover:bg-gold-600 text-black font-bold py-4 px-10 rounded-lg transition shadow-lg transform hover:scale-105 text-lg"
              >
                Analyze Your Resume Now
              </button>
            </div>
          </div>
        </>
      )}

      {/* About Ekene Section */}
      <div className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-12 flex justify-center">
              <img src={logo} alt="Ekene Chris Logo" className="w-48" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-deep-black-800">
                About Ekene Chris
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Ekene Chris is a Technology Architect, Mentor, and Tech Educator
                dedicated to empowering tech professionals through innovation
                and real-world expertise. As the Co-Founder & CEO of Teleios, he
                is shaping AI-powered learning for aspiring and mid-level
                engineers across all disciplines.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a track record spanning Andela, Kuda, and Tek Experts, he
                specializes in architecture design, system optimization, and
                software engineering best practices. Passionate about mentorship
                and strategic problem-solving, Ekene is committed to building
                resilient, scalable tech solutions that drive efficiency and
                transformation.
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="https://ekenechris.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-deep-black-800 hover:bg-deep-black-700 text-white px-6 py-3 rounded-lg font-medium text-center"
                >
                  Visit Website
                </a>
                <a
                  href="https://jointeleios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-caput-mortuum hover:bg-caput-mortuum-700 text-white px-6 py-3 rounded-lg font-medium text-center"
                >
                  Learn About Teleios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
