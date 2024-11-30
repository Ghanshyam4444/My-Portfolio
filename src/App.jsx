import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Education } from "./pages/education";
import About from "./pages/about";
import Contact from "./pages/contact";
import KeySkills from "./pages/key_skills";
import Projects from "./pages/projects";
import Project_Details from "./pages/project_details";
import { Navbar } from "./components/layout/navbar";
import Footer from "./components/layout/footer";

function App() {
  return (
    <BrowserRouter basename="/My-Portfolio">
      {/* Replace 'My-Portfolio' with your actual repo name */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="education" element={<Education />} />
        <Route path="keyskills" element={<KeySkills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project_detail" element={<Project_Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
