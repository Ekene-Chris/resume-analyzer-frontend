import { useState } from "react";
import {
  FaCloudUploadAlt,
  FaChartLine,
  FaFileAlt,
  FaRocket,
  FaCheckCircle,
  FaGlobeAfrica,
} from "react-icons/fa";
import ResumeUpload from "../components/ResumeUpload";
import logo from "../assets/images/logo.svg";

const Home = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);

  return (
    <div className="min-h-screen bg-linen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-caput-mortuum to-caput-mortuum-900 text-white">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Resume Analysis Powered by Global DevOps Expertise
            </h1>
            <p className="text-xl mb-8">
              Get AI-powered feedback on your tech resume, aligned with the
              Global DevOps Competency Matrix, and discover what it takes to
              compete in the global tech marketplace.
            </p>
            <button
              onClick={() => setShowUploadForm(true)}
              className="bg-gold hover:bg-gold-600 text-black font-bold py-3 px-8 rounded-lg transition shadow-lg transform hover:scale-105"
            >
              Analyze Your Resume Now
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-full h-full bg-black rounded-lg"></div>
              <div className="relative bg-linen p-8 rounded-lg border-2 border-caput-mortuum shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-caput-mortuum">
                      Industry-Aligned Analysis
                    </h3>
                    <p className="text-sm text-gray-600">
                      Based on global standards
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-caput-mortuum">
                      Keyword Optimization
                    </h3>
                    <p className="text-sm text-gray-600">
                      Stand out to recruiters
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-caput-mortuum">
                      Targeted Feedback
                    </h3>
                    <p className="text-sm text-gray-600">
                      Role-specific recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-caput-mortuum rounded-full flex items-center justify-center text-white mr-4">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-caput-mortuum">
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
              <h2 className="text-3xl font-bold text-center mb-12 text-caput-mortuum">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-linen p-6 rounded-lg shadow-md text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold opacity-20 rounded-bl-full"></div>
                  <div className="text-caput-mortuum text-4xl mb-4 flex justify-center">
                    <FaCloudUploadAlt />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-caput-mortuum">
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
                  <h3 className="text-xl font-bold mb-2 text-caput-mortuum">
                    AI Analysis
                  </h3>
                  <p className="text-gray-700">
                    Our AI analyzes your resume against industry standards and
                    role-specific requirements from the DevOps Competency
                    Matrix.
                  </p>
                </div>

                <div className="bg-linen p-6 rounded-lg shadow-md text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold opacity-20 rounded-bl-full"></div>
                  <div className="text-caput-mortuum text-4xl mb-4 flex justify-center">
                    <FaFileAlt />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-caput-mortuum">
                    Get Detailed Feedback
                  </h3>
                  <p className="text-gray-700">
                    Receive actionable insights to improve your resume and
                    increase your chances of landing your dream role.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Use Our Tool Section */}
          <div className="py-16 bg-linen">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-caput-mortuum">
                  Why Use Our AI Resume Analyzer?
                </h2>
                <p className="text-xl text-gray-700">
                  Get expert feedback powered by the Global DevOps Competency
                  Matrix and designed to help you compete in the global tech
                  marketplace.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="bg-caput-mortuum text-white p-3 rounded-lg mr-4">
                      <FaGlobeAfrica className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-caput-mortuum">
                        Industry Aligned Analysis
                      </h3>
                      <p className="text-gray-700">
                        Our AI uses the Global DevOps Competency Matrix to
                        evaluate your resume against industry standards and
                        role-specific requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="bg-caput-mortuum text-white p-3 rounded-lg mr-4">
                      <FaRocket className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-caput-mortuum">
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
                    <div className="bg-caput-mortuum text-white p-3 rounded-lg mr-4">
                      <FaFileAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-caput-mortuum">
                        Keyword Optimization
                      </h3>
                      <p className="text-gray-700">
                        Learn which essential keywords are missing from your
                        resume and how to incorporate them effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="bg-caput-mortuum text-white p-3 rounded-lg mr-4">
                      <FaChartLine className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-caput-mortuum">
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
                  className="bg-caput-mortuum hover:bg-caput-mortuum-800 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
                >
                  Analyze Your Resume
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 text-caput-mortuum">
                Success Stories
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-linen p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-caput-mortuum rounded-full flex items-center justify-center text-white font-bold text-xl">
                      DB
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">David B.</h3>
                      <p className="text-sm text-gray-600">
                        Senior DevOps Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "The resume analysis highlighted gaps in how I was
                    presenting my cloud expertise. After implementing the
                    suggestions, I received 3 interview requests within a week!"
                  </p>
                </div>

                <div className="bg-linen p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-caput-mortuum rounded-full flex items-center justify-center text-white font-bold text-xl">
                      SA
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">Sarah A.</h3>
                      <p className="text-sm text-gray-600">
                        Cloud Infrastructure Specialist
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "The keyword analysis was eye-opening. I was missing
                    critical terms that recruiters look for. My improved resume
                    is now getting much more attention on LinkedIn."
                  </p>
                </div>

                <div className="bg-linen p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-caput-mortuum rounded-full flex items-center justify-center text-white font-bold text-xl">
                      JM
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">John M.</h3>
                      <p className="text-sm text-gray-600">Backend Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "As a developer transitioning to DevOps, this tool helped me
                    identify which of my skills to emphasize and what gaps to
                    fill. The structured feedback was invaluable."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-12 bg-gradient-to-r from-caput-mortuum to-caput-mortuum-900 text-white">
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
                className="bg-gold hover:bg-gold-600 text-black font-bold py-3 px-8 rounded-lg transition shadow-lg transform hover:scale-105"
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
              <h2 className="text-3xl font-bold mb-4 text-caput-mortuum">
                About Ekene Chris
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Ekene Chris is a DevOps Architect, Mentor, and Tech Educator
                dedicated to empowering tech professionals through innovation
                and real-world expertise. As the Co-Founder & CEO of Teleios, he
                is shaping AI-powered learning for aspiring and mid-level
                engineers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a track record spanning Andela, Kuda, and Tek Experts, he
                specializes in cloud infrastructure, CI/CD automation, and
                Kubernetes. Passionate about mentorship and strategic
                problem-solving, Ekene is committed to building resilient,
                scalable tech solutions that drive efficiency and
                transformation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://ekenechris.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-caput-mortuum hover:bg-caput-mortuum-800 text-white px-4 py-2 rounded-lg"
                >
                  Visit Website
                </a>
                <a
                  href="https://jointeleios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
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
