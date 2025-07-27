import { Link } from "react-router-dom";
import { FaArrowLeft, FaDownload } from "react-icons/fa";

// Data extracted and updated for your resume
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
    },
  ],
};

// Reusable component for a section on the resume page
const ResumeSection = ({ title, children }) => (
  <div className="mb-12 last:mb-0">
    <h2
      className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2"
      style={{ fontFamily: "'General Sans', sans-serif" }}
    >
      {title}
    </h2>
    <div
      className="text-gray-300"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </div>
  </div>
);

// Component for the glowing mesh gradient animation
const MeshGradientStyles = () => (
  <style>{`
    @keyframes pinkGlow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
    @keyframes violetGlow { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
    #pink-swatch { animation: pinkGlow 12s ease-in-out infinite; }
    #violet-swatch { animation: violetGlow 15s ease-in-out infinite; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  `}</style>
);

export function ResumePage() {
  return (
    <>
      <MeshGradientStyles />
      <div className="min-h-screen w-full bg-black p-8 sm:px-16 md:px-24 relative overflow-auto">
        {/* Background */}
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
              <filter id="blur">
                <feGaussianBlur stdDeviation="100" />
              </filter>
            </defs>
            <rect id="background" width="100%" height="100%" fill="#000" />
            <g id="swatches" filter="url(#blur)">
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

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto lowercase">
          <Link
            to="/"
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 mb-12"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="italic">back to home</span>
          </Link>

          {/* Unified Glassmorphic Container */}
          <div
            className="p-8 rounded-2xl border border-white/10"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              animation: `fadeInUp 0.5s ease-out forwards`,
              opacity: 0,
            }}
          >
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left Column: Resume Details */}
              <div className="w-full lg:w-2/3">
                <ResumeSection title="education">
                  <div className="mb-4">
                    <h3 className="text-lg text-gray-100 font-medium">
                      {resumeData.education.institution}
                    </h3>
                    <p>{resumeData.education.degree}</p>
                    <p className="text-sm text-gray-400">
                      {resumeData.education.duration} | cgpa:{" "}
                      {resumeData.education.cgpa}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-100 font-medium">
                      {resumeData.education.highSchool.institution}
                    </h3>
                    <p>{resumeData.education.highSchool.board}</p>
                    <p className="text-sm text-gray-400">
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
                        <h4 className="font-medium text-gray-200 capitalize">
                          {skill.title}:
                        </h4>
                        <p>{skill.items}</p>
                      </div>
                    ))}
                  </div>
                </ResumeSection>

                <ResumeSection title="certifications">
                  {resumeData.certifications.map((cert) => (
                    <div key={cert.title}>
                      <h3 className="text-lg text-gray-100 font-medium">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {cert.issuer} | {cert.date}
                      </p>
                    </div>
                  ))}
                </ResumeSection>
              </div>

              {/* Right Column: PDF Preview & Download */}
              <div className="w-full lg:w-1/3 lg:sticky top-8 h-fit">
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    style={{ fontFamily: "'General Sans', sans-serif" }}
                  >
                    document
                  </h3>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-white/10 mb-4">
                    <iframe
                      src="/resume.pdf"
                      title="Resume Preview"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <a
                    href="/resume.pdf"
                    download="Vamsi_Krishna_Pullabhotla_Resume.pdf"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
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
    </>
  );
}
