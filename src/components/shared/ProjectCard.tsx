import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div
      className="group relative flex flex-col justify-between p-8 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-black/20 dark:hover:border-white/20"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="dark:bg-black/20 bg-white/20 absolute -inset-2 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative">
        <h3
          className="text-2xl font-semibold text-gray-900 dark:text-gray-100 capitalize"
          style={{ fontFamily: "'General Sans', sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {description}
        </p>
      </div>
      <div className="relative flex justify-between items-end mt-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-violet-800 dark:text-violet-300 bg-violet-500/10 dark:bg-violet-900/30 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 group-hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </div>
  );
};
