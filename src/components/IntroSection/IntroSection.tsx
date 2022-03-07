import { Flex, chakra, Text, Circle, Image } from "@chakra-ui/react";
import image from "./kahho_square.jpeg";

const IntroSection: React.FC = () => (
  <Flex
    flexDir="column"
    color="white"
    alignItems="center"
    position="relative"
    zIndex="2"
  >
    <Text
      fontSize={{ base: "4xl", lg: "5xl" }}
      fontWeight="medium"
      textAlign="center"
      my="80px"
    >
      Hello traveller
    </Text>
    <Flex flexDir={{ base: "column", lg: "row" }} alignItems="center" gap="3vw">
      <Circle padding="8px" bgColor="#2F4E95">
        <Image
          src={image}
          width={{ base: "60vw", lg: "20vw" }}
          maxW="300px"
          height="auto"
          borderRadius="50%"
          draggable="false"
        />
      </Circle>
      <Text
        fontSize={{ base: "xl", lg: "3xl" }}
        width="80vw"
        maxWidth="800px"
        lineHeight={{ base: "30px", lg: "40px" }}
        padding={{ base: "16px", lg: "26px" }}
        background="rgba(47,78,149,0.6)"
        borderRadius="30px"
        boxShadow="10px 10px rgba(255,255,255,0.8)"
      >
        My name is{" "}
        <chakra.span fontWeight="medium" fontSize={{ base: "2xl", lg: "4xl" }}>
          Swee Kah Ho
        </chakra.span>
        , and I am a student studying Information Technology on a beautiful
        green planet called '<chakra.span as="i">Earth</chakra.span>'. <br />
        <br />
        More specifically, a place called Ngee Ann Polytechnic, Singapore.
      </Text>
    </Flex>
  </Flex>
);

export default IntroSection;
