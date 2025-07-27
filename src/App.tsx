import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import Pages
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { NowPage } from "./pages/NowPage";
import { NotFoundPage } from "./pages/NotFoundPage"; // 1. Import the new page

// Import Layout and Shared Components
import { ThemeProvider } from "./components/layout/ThemeProvider";
import { ThemeToggle } from "./components/shared/ThemeToggle";
import { Background } from "./components/layout/Background";

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/now" element={<NowPage />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
        {/* 2. Add catch-all route */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Background />
      <ThemeToggle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
