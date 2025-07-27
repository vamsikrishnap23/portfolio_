import { Link } from "react-router-dom";
import { ProjectCard } from "../components/shared/ProjectCard";
import { FaArrowLeft } from "react-icons/fa";

// Data for your projects, extracted from your resume
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

// Component for the glowing mesh gradient animation (can be moved to a layout component later)
const MeshGradientStyles = () => (
  <style>{`
    @keyframes pinkGlow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
    @keyframes violetGlow { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
    #pink-swatch { animation: pinkGlow 12s ease-in-out infinite; }
    #violet-swatch { animation: violetGlow 15s ease-in-out infinite; }
  `}</style>
);

export function ProjectsPage() {
  return (
    <>
      <MeshGradientStyles />
      <div className="min-h-screen w-full bg-black p-8 sm:px-16 md:px-24 relative overflow-auto">
        {/* The glowing mesh gradient SVG background */}
        <div className="absolute inset-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="mesh-gradient"
            width="100%"
            height="100%"
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter
                id="blur"
                filterUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1000"
                height="500"
              >
                <feGaussianBlur stdDeviation="100" />
              </filter>
            </defs>
            <rect id="background" width="100%" height="100%" fill="#000" />
            <g id="swatches" width="1000" height="500" filter="url(#blur)">
              <rect x="240" y="145" width="280" height="290" fill="#000000" />
              <rect
                id="pink-swatch"
                x="140"
                y="-12"
                width="420"
                height="224"
                fill="#FF0197"
              />
              <rect
                id="violet-swatch"
                x="-35"
                y="310"
                width="210"
                height="240"
                fill="#8024C7"
              />
            </g>
          </svg>
        </div>

        {/* Content container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Back to Home Link */}
          <Link
            to="/"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-12"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="italic">back to home</span>
          </Link>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lowercase">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
