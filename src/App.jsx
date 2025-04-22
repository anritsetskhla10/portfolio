import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificatePage from "./pages/CertificatePage";
import ContactPage from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="overflow-x-hidden dark:text-neutral-300 text-blue-50 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-gray-800
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
        dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(11, 10, 77, 0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Routes>
          <Route path="/"element={<HomePage />}/>
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
