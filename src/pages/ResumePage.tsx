import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { PageLayout } from "../components/layout/PageLayout";
import React from "react";

const resumeData = {
  education: {
    institution: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2023 - 2027",
    cgpa: "9.25*/10",
    highSchool: {
      institution: "Narayana Junior College",
      board: "Board of Intermediate Education | Andhra Pradesh",
      score: "97.8%",
    },
  },
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Machine Learning & Deep Learning",
    "Computer Networks",
    "Artificial Intelligence",
    "Cloud Computing",
    "Database Management Systems",
    "Operating Systems",
    "Web Development",
  ],
  skills: [
    { title: "Languages", items: "JavaScript, Python, C, C++, Java" },
    {
      title: "Web & Frontend",
      items: "Next.js/React.js, Tailwind CSS, HTML, CSS",
    },
    {
      title: "Backend & APIs",
      items: "FastAPI, SQL, PostgreSQL, Flask, Supabase",
    },
    {
      title: "ML & AI",
      items: "TensorFlow, PyTorch, Scikit-learn, NumPy, Pandas, Streamlit",
    },
    { title: "Tools & Platforms", items: "Git, GitHub, Postman, Linux" },
  ],
  certifications: [
    {
      title: "Gen AI using IBM watsonx",
      issuer: "IBM Career Education",
      date: "June 2025",
      link: "https://courses.vit.skillsnetwork.site/certificates/c12a93d52bf9448f98d30060ba08df7d",
    },
  ],
};

// Define the type for the component's props
interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResumeSection = ({ title, children }: ResumeSectionProps) => (
  <div className="mb-12 last:mb-0">
    <h2
      className="text-2xl font-semibold text-black dark:text-white mb-4 border-b border-black/10 dark:border-white/10 pb-2 capitalize drop-shadow-sm"
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      {title}
    </h2>
    <div
      className="text-gray-800 dark:text-gray-300"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </div>
  </div>
);

export function ResumePage() {
  return (
    <PageLayout>
      <div className="min-h-screen w-full bg-transparent p-8 sm:px-16 md:px-24 relative">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link
            to="/"
            className="group flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 mb-12"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="italic">/home</span>
          </Link>
          <h1
            className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-1 drop-shadow-sm"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            /resume
          </h1>
          <p
            className="text-base text-gray-800 dark:text-gray-400 mb-4"
            style={{ fontFamily: "'Inter', sans-serif'" }}
          >
            My background, skills, and what I’ve worked on so far.
          </p>

          <div
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="w-full lg:w-2/3">
                <ResumeSection title="education">
                  <div className="mb-4">
                    <h3 className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                      {resumeData.education.institution}
                    </h3>
                    <p>{resumeData.education.degree}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {resumeData.education.duration} | CGPA:{" "}
                      <strong className="font-semibold">
                        {resumeData.education.cgpa}
                      </strong>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                      {resumeData.education.highSchool.institution}
                    </h3>
                    <p>{resumeData.education.highSchool.board}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      Percentage:{" "}
                      <strong className="font-semibold">
                        {resumeData.education.highSchool.score}
                      </strong>
                    </p>
                  </div>
                </ResumeSection>
                <ResumeSection title="relevant coursework">
                  <p className="leading-relaxed">
                    {resumeData.relevantCoursework.join(" · ")}
                  </p>
                </ResumeSection>
                <ResumeSection title="skills">
                  <div className="space-y-4">
                    {resumeData.skills.map((skill) => (
                      <div key={skill.title}>
                        <h4 className="font-semibold italic text-gray-900 dark:text-gray-200 underline underline-offset-4 decoration-black/20 dark:decoration-white/20 mb-1">
                          {skill.title}
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
                        <h3 className="text-lg text-gray-900 dark:text-gray-100 font-medium">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          {cert.issuer} | {cert.date}
                        </p>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full hover:border-black/20 dark:hover:border-white/30"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span>View</span>
                      </a>
                    </div>
                  ))}
                </ResumeSection>
              </div>
              <div className="w-full lg:w-1/3 lg:sticky top-8 h-fit">
                <div>
                  <h3
                    className="text-lg font-semibold text-black dark:text-white mb-4 drop-shadow-sm"
                    style={{ fontFamily: "'General Sans', sans-serif" }}
                  >
                    Resume
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
                    <span>Download PDF</span>
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
