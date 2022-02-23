import { Flex, Box } from "@chakra-ui/react";
import SpaceBG from "./components/SpaceBG/SpaceBG";
import UFO from "./components/UFO/UFO";
import "./main.css";

function App() {
  return (
    <Box width="100vw" height="100vh" overflow="hidden">
      <Flex width="100vw" minH="100vh" bgColor="#111a22" flexDir="column">
        <SpaceBG />
        <UFO />
      </Flex>
    </Box>
  );
}

export default App;
