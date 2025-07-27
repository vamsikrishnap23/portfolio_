import { Link } from "react-router-dom";
import { ProjectCard } from "../components/shared/ProjectCard";
import { FaArrowLeft } from "react-icons/fa";
import { PageLayout } from "../components/layout/PageLayout";

const projectsData = [
  {
    title: "eleventh hour",
    description:
      "an ai-powered tool that auto-generates professional project reports by analyzing uploaded code using google gemini.",
    tags: ["flask", "google gemini", "word", "mermaid.js"],
    link: "#",
  },
  {
    title: "personamirror",
    description:
      "an ai-powered lead profiling & outreach tool that converts twitter/x data into ai-generated personas and cold outreach drafts.",
    tags: ["streamlit", "gemini 1.5", "groq llama3", "yaml"],
    link: "#",
  },
  {
    title: "nutripro",
    description:
      "a nutritionist appointment booking web app with user authentication, routing, and form-based scheduling.",
    tags: ["next.js", "react", "tailwind css"],
    link: "#",
  },
  {
    title: "astrology api",
    description:
      "a fastapi-based horoscope computation engine with 20+ endpoints for divisional charts, planetary info, and dasha systems.",
    tags: ["fastapi", "python", "svg generation"],
    link: "#",
  },
];

export function ProjectsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen w-full bg-transparent p-8 sm:px-16 md:px-24 relative overflow-y-auto">
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          <Link
            to="/"
            className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 mb-12"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="italic">/home</span>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lowercase">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
