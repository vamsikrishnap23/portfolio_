import { FaArrowRight } from "react-icons/fa";

export const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div
      className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
      style={{
        background: "rgba(20, 20, 20, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div>
        <h3
          className="text-2xl font-semibold text-gray-100"
          style={{ fontFamily: "'General Sans', sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="mt-3 text-gray-400 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-violet-300 bg-violet-900/30 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-300 font-medium"
          style={{ fontFamily: "'General Sans', sans-serif" }}
        >
          view project
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
