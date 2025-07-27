import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export const Background = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate the transform values for a subtle parallax effect
  const transformX = (mousePosition.x / window.innerWidth - 0.5) * -40;
  const transformY = (mousePosition.y / window.innerHeight - 0.5) * -40;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-300 ${
        theme === "dark" ? "opacity-100" : "opacity-70"
      }`}
    >
      <div
        className="blob-c"
        style={{
          transform: `translate(${transformX}px, ${transformY}px)`,
        }}
      >
        <div className="blob one"></div>
        <div className="blob two"></div>
      </div>
    </div>
  );
};
