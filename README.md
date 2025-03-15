# Resume Analyzer Frontend

This is the frontend application for the AI Resume Analyzer, which helps tech professionals get feedback on their resumes based on the Global DevOps Competency Matrix and industry standards.

## Features

- Resume upload and analysis
- Real-time analysis status tracking
- Detailed feedback display
- Keyword optimization recommendations
- PDF report generation and download

## Tech Stack

- React 18
- React Router for navigation
- React Query for data fetching/caching
- Tailwind CSS for styling
- Axios for API communication
- Vite for build tooling

## Prerequisites

- Node.js 16+
- npm or yarn

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/resume-analyzer-frontend.git
cd resume-analyzer-frontend
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Environment Configuration

The project uses environment files for configuration:

- `.env.development` - Development environment settings
- `.env.production` - Production environment settings

You may need to adjust the `VITE_API_URL` variable to point to your backend API.

## Building for Production

```bash
npm run build
```

This will create a `dist` directory with the production build.

## Deployment

The project is configured for deployment to Azure App Service using GitHub Actions. When you push to the main branch, the GitHub workflow will automatically build and deploy the application.

### Required GitHub Secrets

- `AZURE_WEBAPP_PUBLISH_PROFILE` - The publish profile from your Azure Web App

## Project Structure

```
resume-analyzer-frontend/
├── public/               # Static assets
│   └── web.config        # Configuration for Azure deployment
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── .env.development      # Development environment variables
├── .env.production       # Production environment variables
├── .github/              # GitHub Actions workflows
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project metadata and dependencies
```

## Backend Integration

This frontend is designed to work with the [AI Resume Analyzer API](https://github.com/yourusername/ai-resume-analyzer) backend. Make sure the backend API is properly configured and accessible.

## License

[MIT License](LICENSE)

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
