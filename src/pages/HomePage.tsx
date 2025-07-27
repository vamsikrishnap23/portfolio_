import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

// Component for the glowing mesh gradient animation
const MeshGradientStyles = () => (
  <style>{`
    /* Animation to pulse the opacity (brightness) of the pink swatch - now brighter */
    @keyframes pinkGlow {
      0%, 100% {
        opacity: 0.7;
      }
      50% {
        opacity: 1;
      }
    }

    /* Animation to pulse the opacity (brightness) of the violet swatch - now brighter */
    @keyframes violetGlow {
      0%, 100% {
        opacity: 0.6;
      }
      50% {
        opacity: 1;
      }
    }

    /* Target each swatch by its ID and apply its unique animation */
    #pink-swatch {
      animation: pinkGlow 12s ease-in-out infinite;
    }
    #violet-swatch {
      animation: violetGlow 15s ease-in-out infinite;
    }
  `}</style>
);

// Component for individual social links
const SocialLink = ({ href, icon: Icon, isEmail = false }) => (
  <a
    href={isEmail ? `mailto:${href}` : href}
    target={isEmail ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-white transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

// Main HomePage Component
export function HomePage() {
  return (
    <>
      <MeshGradientStyles />
      <div className="flex h-screen w-full items-center justify-start bg-black p-8 sm:px-16 md:px-24 relative overflow-hidden">
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
        <div className="max-w-3xl text-left relative z-10 lowercase">
          <h3
            className="text-4xl md:text-6xl font-semibold text-gray-100 leading-tight capitalize"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            Vamsi Krishna Pullabhotla <br />{" "}
            <i className="font-normal text-3xl md:text-5xl lowercase">
              [a silly one-liner about you].
            </i>
          </h3>

          <p
            className="mt-6 text-lg text-gray-300 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            [a brief, engaging bio about your work and passion. mention what
            drives you and what you love to create. keep it concise but full of
            personality.]
          </p>

          <div className="mt-12 mb-8 h-px w-full bg-white/10" />

          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <nav className="flex items-center gap-6 text-base font-medium text-gray-300">
              <Link
                to="/projects"
                className="italic hover:text-white transition-colors duration-300"
              >
                /projects
              </Link>
              <Link
                to="/resume"
                className="italic hover:text-white transition-colors duration-300"
              >
                /resume
              </Link>
              <Link
                to="/contact"
                className="italic hover:text-white transition-colors duration-300"
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
    </>
  );
}
