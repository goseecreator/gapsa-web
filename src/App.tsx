import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import PortalPage from "./pages/PortalPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import SnippetsPage from "./pages/SnippetsPage";
import ContactPage from "./pages/ContactPage";
import PastProjectsPage from "./pages/PastProjectsPage"; // Import the Past Projects Page
import SeeWhatsNextPage from "./pages/SeeWhatsNextPage"; // Ensure this page exists


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/portal/past" element={<PastProjectsPage />} /> {/* Route for Past Projects */}
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/snippets" element={<SnippetsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portal/future" element={<SeeWhatsNextPage />} /> {/* This should be for future projects */}

      </Route>
    </Routes>
  );
}
