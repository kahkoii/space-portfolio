import { Flex, Box } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useScrollPercentage } from "react-scroll-percentage";
import AboutSection from "./components/AboutSection/AboutSection";
import IntroSection from "./components/IntroSection/IntroSection";
import Navbar from "./components/Navbar/Navbar";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import SpaceBG from "./components/SpaceBG/SpaceBG";
import UFO from "./components/UFO/UFO";
import "./main.css";

function App() {
  const [ref, percentage] = useScrollPercentage();
  return (
    <Router>
      <Box width="100vw" height="100vh" overflowX="hidden">
        <Flex
          width="100vw"
          minH="100vh"
          bgColor="#111a22"
          flexDir="column"
          ref={ref}
        >
          <SpaceBG />
          <UFO percentage={percentage} />
          <Navbar />
          <IntroSection />
          <AboutSection />
          <SkillsSection />
          <Box id="contact" boxSize="20px" bg="red" marginTop="800px" />
        </Flex>
      </Box>
    </Router>
  );
}

export default App;
