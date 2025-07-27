import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage"; // Import the new page

// Placeholder for the last page
const ContactPage = () => (
  <div className="h-screen w-full flex items-center justify-center bg-black text-white text-3xl font-serif">
    Contact Page
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />{" "}
        {/* Use the new component */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
