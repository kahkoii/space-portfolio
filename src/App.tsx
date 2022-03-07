import { Flex, Box } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import SpaceBG from "./components/SpaceBG/SpaceBG";
import UFO from "./components/UFO/UFO";
import "./main.css";

function App() {
  return (
    <Router>
      <Box width="100vw" height="100vh" overflowX="hidden">
        <Flex width="100vw" minH="100vh" bgColor="#111a22" flexDir="column">
          <SpaceBG />
          <UFO />
          <Navbar />
          <IntroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </Flex>
      </Box>
    </Router>
  );
}

export default App;
