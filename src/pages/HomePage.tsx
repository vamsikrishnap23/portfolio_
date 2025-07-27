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
          <h1
            className="text-5xl md:text-7xl font-semibold text-gray-900 dark:text-gray-100 leading-tight"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            [your name] — <br />{" "}
            <i className="font-normal">[a silly one-liner about you].</i>
          </h1>
          <p
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            [a brief, engaging bio about your work and passion. mention what
            drives you and what you love to create. keep it concise but full of
            personality.]
          </p>
          <div className="mt-12 mb-8 h-px w-full bg-black/10 dark:bg-white/10" />
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <nav className="flex items-center gap-6 text-base font-medium text-gray-600 dark:text-gray-300">
              <Link
                to="/projects"
                className="italic hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                /projects
              </Link>
              <Link
                to="/resume"
                className="italic hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                /resume
              </Link>
              <Link
                to="/contact"
                className="italic hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                /contact
              </Link>
            </nav>
            <div className="flex items-center gap-5">
              <SocialLink
                href="your-email@example.com"
                icon={FaEnvelope}
                isEmail={true}
              />
              <SocialLink href="#" icon={FaGithub} />
              <SocialLink href="#" icon={FaLinkedin} />
              <SocialLink href="#" icon={FaInstagram} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
