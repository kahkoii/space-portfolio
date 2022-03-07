import { Image, Box } from "@chakra-ui/react";
import logo from "./ufo.svg";

const UFO: React.FC = () => {
  const a = 3; // eslint-disable-line
  return (
    <Box position="absolute" zIndex="5" id="ufoBox">
      <Image
        src={logo}
        alt="UFO"
        width="36vw"
        maxW="360px"
        alignSelf="center"
        className="ufo"
      />
    </Box>
  );
};

export default UFO;
