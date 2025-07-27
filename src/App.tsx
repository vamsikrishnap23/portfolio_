import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { ThemeProvider } from "./components/layout/ThemeProvider";
import { ThemeToggle } from "./components/shared/ThemeToggle";
import { Background } from "./components/layout/Background"; // Import the Background component

const ContactPage = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-black text-black dark:text-white text-3xl font-serif">
    Contact Page
  </div>
);

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    // 1. ThemeProvider is the outermost wrapper.
    <ThemeProvider defaultTheme="dark">
      {/* 2. The Background and ThemeToggle are placed here to be visible on all pages. */}
      <Background />
      <ThemeToggle />
      {/* 3. The Router wraps the routes. The incorrect PageLayout has been removed from here. */}
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
