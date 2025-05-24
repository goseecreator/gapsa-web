import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DonatePage from "./pages/DonatePage";
import ContactPage from "./pages/ContactPage";





export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />


      </Route>
    </Routes>
  );
}
