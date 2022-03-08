import { Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import logo from "./ufo.svg";

const UFO: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <Box
      position="absolute"
      zIndex="5"
      onClick={() => setHidden(true)}
      id="ufoBox"
    >
      <Image
        src={logo}
        alt="UFO"
        width="36vw"
        maxW="360px"
        alignSelf="center"
        className="ufo"
        display={hidden ? "none" : "initial"}
      />
    </Box>
  );
};

export default UFO;
