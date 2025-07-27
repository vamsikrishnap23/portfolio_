import { useTheme } from "../layout/ThemeProvider";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-8 right-8 z-50 p-2 rounded-full border border-black/10 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-sm text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/30 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};
