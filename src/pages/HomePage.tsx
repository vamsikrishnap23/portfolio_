import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";

const SocialLink = ({ href, icon: Icon, isEmail = false }) => (
  <a
    href={isEmail ? `mailto:${href}` : href}
    target={isEmail ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className="text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

export function HomePage() {
  return (
    <PageLayout>
      <div className="flex h-screen w-full items-center justify-start bg-transparent p-8 sm:px-16 md:px-24 relative">
        <div className="max-w-3xl text-left relative z-10 lowercase">
          <h2
            className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 leading-tight capitalize"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <span className="font-bold">Vamsi Krishna Pullabhotla</span>
          </h2>

          <h4
            className="mt-2 text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-normal italic"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <i>building calm tools with chaotic tech.</i>
          </h4>

          <p
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I’m a <strong>developer</strong> and <strong>ML enthusiast</strong>{" "}
            exploring the intersection of <em>AI</em>, <em>automation</em>, and{" "}
            <strong>clean design</strong>. I’ve built{" "}
            <strong>GenAI tools</strong>, <strong>FastAPI backends</strong>, and
            lightweight web apps with a focus on <u>solving real problems</u>.
            Currently building AI workflows at{" "}
            <a
              href="https://altara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold italic hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              Altara
            </a>
            , shipping solo projects, and always learning quietly in the
            background.
          </p>

          <div className="mt-12 mb-8 h-px w-full bg-black/10 dark:bg-white/10" />

          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <nav className="flex items-center gap-6 text-base font-medium text-gray-600 dark:text-gray-300">
              <Link
                to="/projects"
                className="italic hover:text-black dark:hover:text-white hover:underline transition-colors duration-300"
              >
                /projects
              </Link>
              <Link
                to="/resume"
                className="italic hover:text-black dark:hover:text-white hover:underline transition-colors duration-300"
              >
                /resume
              </Link>
              <Link
                to="/now"
                className="italic hover:text-black dark:hover:text-white hover:underline transition-colors duration-300"
              >
                /now
              </Link>
            </nav>

            <div className="flex items-center gap-5">
              <SocialLink
                href="mailto:vamsikrishnapullabhotla23@gmail.com"
                icon={FaEnvelope}
                isEmail={true}
              />
              <SocialLink
                href="https://github.com/vamsikrishnap23"
                icon={FaGithub}
              />
              <SocialLink
                href="https://www.linkedin.com/in/vamsi-krishna-pullabhotla-3b81ab293/"
                icon={FaLinkedin}
              />
              <SocialLink
                href="https://www.instagram.com/_vamsi___23?igsh=MTNpdWhrcjQ3Y3B1Yw%3D%3D&utm_source=qr"
                icon={FaInstagram}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
