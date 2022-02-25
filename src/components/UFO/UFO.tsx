import { Image } from "@chakra-ui/react";
import logo from "./ufo.svg";

const UFO: React.FC<{ percentage?: number }> = ({ percentage }) => {
  const a = 3; // eslint-disable-line
  return (
    <>
      <Image
        src={logo}
        alt="UFO"
        position="absolute"
        width="46vw"
        maxW="460px"
        top="-6vw"
        alignSelf="center"
        className="ufo"
        zIndex="5"
      />
    </>
  );
};

export default UFO;
