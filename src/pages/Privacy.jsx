import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 my-8">
      <h1 className="text-3xl font-bold mb-6 text-deep-black-800">
        Privacy Policy
      </h1>

      <div className="prose prose-lg text-gray-700">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          Introduction
        </h2>
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, and share
          information when you use our AI Resume Analyzer service.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          Information We Collect
        </h2>
        <p className="mb-2">When using our service, we collect:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information you provide (name, email)</li>
          <li>Resume content you upload</li>
          <li>
            Information about your preferences (target role, experience level)
          </li>
          <li>Usage data (how you interact with our service)</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          Analytics
        </h2>
        <p className="mb-4">
          We use Google Analytics to collect information about how you use our
          website. This helps us improve our service and provide a better
          experience. Google Analytics uses cookies to collect information such
          as:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Pages you visit</li>
          <li>Time spent on each page</li>
          <li>Interactions with our service</li>
          <li>General location information</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          How We Use Your Information
        </h2>
        <p className="mb-2">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and improve our resume analysis service</li>
          <li>Send you results and feedback about your resume</li>
          <li>Analyze usage patterns to improve our website</li>
          <li>Develop new features and services</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          Your Choices
        </h2>
        <p className="mb-4">
          You can choose to decline cookies through our consent banner or your
          browser settings. Note that some features of our website may not
          function properly without cookies.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          Data Security
        </h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your personal
          information. However, no method of transmission over the Internet or
          electronic storage is 100% secure.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at privacy@ekenechris.com.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-3 text-deep-black-800">
          Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date.
        </p>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-deep-black-800 hover:bg-deep-black-700 text-white px-6 py-3 rounded-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
