import { useTheme } from "./ThemeProvider";

const MeshGradientStyles = () => (
  <style>{`
    @keyframes pinkGlow {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }

    @keyframes violetGlow {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    @keyframes movePink {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(40px, -30px) rotate(20deg); }
      50% { transform: translate(-20px, 50px) rotate(-10deg); }
      75% { transform: translate(-30px, -20px) rotate(15deg); }
    }

    @keyframes moveViolet {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(-30px, 20px) rotate(-15deg); }
      50% { transform: translate(50px, -40px) rotate(10deg); }
      75% { transform: translate(10px, 30px) rotate(-5deg); }
    }
  `}</style>
);

const DarkBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    viewBox="0 0 1000 500"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="blur-dark" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="100" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="#000" />
    <g id="swatches" filter="url(#blur-dark)">
      <rect
        id="pink-swatch"
        x="140"
        y="-12"
        width="420"
        height="224"
        fill="#FF0197"
        style={{
          animation:
            "pinkGlow 12s ease-in-out infinite, movePink 22s ease-in-out infinite",
        }}
      />
      <rect
        id="violet-swatch"
        x="-35"
        y="310"
        width="210"
        height="240"
        fill="#8024C7"
        style={{
          animation:
            "violetGlow 15s ease-in-out infinite, moveViolet 28s ease-in-out infinite",
        }}
      />
    </g>
  </svg>
);

const LightBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    viewBox="0 0 1000 500"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="blur-light" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="100" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="#fff" />
    <g id="swatches" filter="url(#blur-light)">
      <rect
        id="light-pink-swatch"
        x="140"
        y="-12"
        width="420"
        height="224"
        fill="#FF0197"
        style={{
          animation:
            "pinkGlow 12s ease-in-out infinite, movePink 22s ease-in-out infinite",
        }}
      />
      <rect
        id="light-violet-swatch"
        x="-35"
        y="310"
        width="210"
        height="240"
        fill="#8024C7"
        style={{
          animation:
            "violetGlow 15s ease-in-out infinite, moveViolet 28s ease-in-out infinite",
        }}
      />
    </g>
  </svg>
);

export const Background = () => {
  const { theme } = useTheme();

  return (
    <>
      <MeshGradientStyles />
      <div className="fixed top-0 left-0 w-screen h-screen -z-10">
        {theme === "dark" ? <DarkBackground /> : <LightBackground />}
      </div>
    </>
  );
};
