import { Link } from "react-router-dom";
import { ProjectCard } from "../components/shared/ProjectCard";
import { FaArrowLeft } from "react-icons/fa";
import { PageLayout } from "../components/layout/PageLayout";

const projectsData = [
  {
    title: "Eleventh Hour",
    description:
      "An AI-powered tool that auto-generates professional project reports by analyzing uploaded code using Google Gemini.",
    tags: ["Flask", "Google Gemini", "Word", "Mermaid.js"],
    link: "https://github.com/vamsikrishnap23/eleventh-hour",
  },
  {
    title: "PersonaMirror",
    description:
      "An AI-powered lead profiling & outreach tool that converts Twitter/X data into AI-generated personas and cold outreach drafts.",
    tags: ["Streamlit", "Gemini 1.5", "Groq Llama3", "YAML"],
    link: "https://github.com/vamsikrishnap23/PersonaMirror",
  },
  {
    title: "NutriPro",
    description:
      "A nutritionist appointment booking web app with user authentication, routing, and form-based scheduling.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/vamsikrishnap23/NutriPro",
  },
  {
    title: "Astrology API",
    description:
      "A FastAPI-based horoscope computation engine with 20+ endpoints for divisional charts, planetary info, and Dasha systems.",
    tags: ["FastAPI", "Python", "SVG Generation"],
    link: "https://github.com/vamsikrishnap23/astrology_api_",
  },
];

export function ProjectsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen w-full bg-transparent p-8 sm:px-16 md:px-24 relative">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <Link
            to="/"
            className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 mb-12"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="italic">/home</span>
          </Link>
          <h1
            className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-1"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            /projects
          </h1>
          <p
            className="text-base text-gray-700 dark:text-gray-400 mb-4"
            style={{ fontFamily: "'Inter', sans-serif'" }}
          >
            Things I’ve built recently — practical, simple, and still improving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
