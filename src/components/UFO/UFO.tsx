import { Image } from "@chakra-ui/react";
import logo from "./ufo.svg";

const UFO: React.FC = () => {
  const a = 3; // eslint-disable-line
  return (
    <Image
      src={logo}
      alt="UFO"
      position="absolute"
      width={{ base: "58vw", md: "300px", lg: "520px" }}
      top="30px"
      alignSelf="center"
      className="ufo"
      zIndex="5"
    />
  );
};

export default UFO;
