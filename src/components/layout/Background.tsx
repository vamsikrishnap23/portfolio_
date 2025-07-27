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

    #pink-swatch, #light-pink-swatch {
      animation: pinkGlow 12s ease-in-out infinite;
    }

    #violet-swatch, #light-violet-swatch {
      animation: violetGlow 15s ease-in-out infinite;
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
      <filter id="blur-dark" x="0" y="0" width="1000" height="500">
        <feGaussianBlur stdDeviation="100" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="#000" />
    <g id="swatches" filter="url(#blur-dark)">
      {/* Removed the rectangle that caused the rectangle bug */}
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
);

const LightBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    viewBox="0 0 1000 500"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="blur-light" x="0" y="0" width="1000" height="500">
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
      />
      <rect
        id="light-violet-swatch"
        x="-35"
        y="310"
        width="210"
        height="240"
        fill="#8024C7"
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
