import { Box, Image } from "@chakra-ui/react";
import SpaceBG from "./components/SpaceBG/SpaceBG";
import logo from "./images/ufo.svg";
import "./main.css";

function App() {
  return (
    <Box width="100vw" height="100vh" overflow="hidden">
      <Box width="100vw" minH="100vh" bgColor="#111a22">
        <SpaceBG />
        <Image src={logo} alt="UFO" position="relative" zIndex="2" />
      </Box>
    </Box>
  );
}

export default App;
