import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { PageLayout } from "../components/layout/PageLayout";

const resumeData = {
  education: {
    institution: "vellore institute of technology",
    degree: "b.tech in computer science and engineering",
    duration: "2023 - 2027",
    cgpa: "9.25/10",
    highSchool: {
      institution: "[your 12th grade school name]",
      board: "[your board, e.g., cbse, isc]",
      score: "[your percentage/grade]",
    },
  },
  relevantCoursework: [
    "data structures & algorithms",
    "machine learning & deep learning",
    "computer networks",
    "artificial intelligence",
    "cloud computing",
    "database management systems",
    "operating systems",
    "web development",
  ],
  skills: [
    { title: "languages", items: "javascript, python, c++, java" },
    {
      title: "web & frontend",
      items: "next.js/react.js, tailwind css, html, css",
    },
    {
      title: "backend & apis",
      items: "flask, supabase, sql, postgresql, fastapi",
    },
    {
      title: "ml & ai",
      items: "tensorflow, pytorch, scikit-learn, numpy, pandas, streamlit",
    },
    { title: "tools & platforms", items: "git, github, postman, linux" },
  ],
  certifications: [
    {
      title: "gen ai using ibm watsonx",
      issuer: "ibm career education",
      date: "june 2025",
      link: "#",
    },
  ],
};

const ResumeSection = ({ title, children }) => (
  <div className="mb-12 last:mb-0">
    <h2
      className="text-2xl font-semibold text-black dark:text-white mb-4 border-b border-black/10 dark:border-white/10 pb-2"
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      {title}
    </h2>
    <div
      className="text-gray-600 dark:text-gray-300"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </div>
  </div>
);

export function ResumePage() {
  return (
    <PageLayout>
      <div className="min-h-screen w-full bg-transparent p-8 sm:px-16 md:px-24 relative overflow-y-auto">
        <div className="relative z-10 w-full max-w-7xl mx-auto lowercase">
          <Link
            to="/"
            className="group flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 mb-12"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="italic">back to home</span>
          </Link>
          <div
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              animation: `fadeInUp 0.5s ease-out forwards`,
              opacity: 0,
              background: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="w-full lg:w-2/3">
                <ResumeSection title="education">
                  <div className="mb-4">
                    <h3 className="text-lg text-gray-800 dark:text-gray-100 font-medium">
                      {resumeData.education.institution}
                    </h3>
                    <p>{resumeData.education.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {resumeData.education.duration} | cgpa:{" "}
                      {resumeData.education.cgpa}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-800 dark:text-gray-100 font-medium">
                      {resumeData.education.highSchool.institution}
                    </h3>
                    <p>{resumeData.education.highSchool.board}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      score: {resumeData.education.highSchool.score}
                    </p>
                  </div>
                </ResumeSection>
                <ResumeSection title="relevant coursework">
                  <p className="capitalize leading-relaxed">
                    {resumeData.relevantCoursework.join(" · ")}
                  </p>
                </ResumeSection>
                <ResumeSection title="skills">
                  <div className="space-y-4">
                    {resumeData.skills.map((skill) => (
                      <div key={skill.title}>
                        <h4 className="font-medium text-gray-700 dark:text-gray-200 capitalize">
                          {skill.title}:
                        </h4>
                        <p>{skill.items}</p>
                      </div>
                    ))}
                  </div>
                </ResumeSection>
                <ResumeSection title="certifications">
                  {resumeData.certifications.map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <h3 className="text-lg text-gray-800 dark:text-gray-100 font-medium">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.issuer} | {cert.date}
                        </p>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full hover:border-black/20 dark:hover:border-white/30"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span>view</span>
                      </a>
                    </div>
                  ))}
                </ResumeSection>
              </div>
              <div className="w-full lg:w-1/3 lg:sticky top-8 h-fit">
                <div>
                  <h3
                    className="text-lg font-semibold text-black dark:text-white mb-4"
                    style={{ fontFamily: "'General Sans', sans-serif" }}
                  >
                    document
                  </h3>
                  <div className="hidden lg:block aspect-[3/4] rounded-lg overflow-hidden border border-black/10 dark:border-white/10 mb-4">
                    <iframe
                      src="/resume.pdf#toolbar=0&view=Fit"
                      title="Resume Preview"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <a
                    href="/resume.pdf"
                    download="Vamsi_Krishna_Pullabhotla_Resume.pdf"
                    className="w-full flex items-center justify-center gap-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-black dark:text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    <FaDownload />
                    <span>download pdf</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
