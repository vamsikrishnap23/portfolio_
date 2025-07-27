import { Background } from "@/components/layout/Background";
import { useTheme } from "@/components/layout/ThemeProvider";

// A simple arrow icon for the button
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 h-5 w-5"
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

export const NotFoundPage = () => {
  const { theme } = useTheme();

  return (
    <>
      <Background />
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 text-center">
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            theme === "dark" ? "bg-black/50" : "bg-white/50"
          }`}
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        ></div>

        <div className="relative z-10">
          <h1
            className={`text-8xl sm:text-9xl font-bold tracking-tighter ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            404
          </h1>

          <p
            className={`mt-4 text-lg sm:text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Oops! You've drifted into the cosmic void.
          </p>
          <p
            className={`mt-2 text-base ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            The page you're looking for doesn't exist.
          </p>

          <a
            href="/"
            className={`
              mt-8 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium 
              transition-all duration-300 ease-in-out
              ${
                theme === "dark"
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2 
              ${theme === "dark" ? "focus:ring-white" : "focus:ring-gray-900"}
              shadow-lg hover:shadow-xl transform hover:-translate-y-1
            `}
          >
            <ArrowLeftIcon />
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
};
