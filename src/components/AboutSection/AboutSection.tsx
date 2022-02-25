import { Flex, Text, Image } from "@chakra-ui/react";
import planet1 from "./blueplanet.svg";
import planet2 from "./saturn.svg";

const AboutSection: React.FC = () => (
  <Flex
    flexDir="column"
    color="white"
    fontSize={{ base: "xl", lg: "2xl" }}
    lineHeight={{ base: "30px", lg: "40px" }}
    marginTop="40px"
    padding="0 8vw"
    gap="36px"
    position="relative"
    zIndex="2"
  >
    <Text fontSize="4xl" fontWeight="medium" marginLeft="30px" id="about">
      About Me
    </Text>
    <Flex flexDir={{ base: "column", lg: "row" }} gap="3vw">
      <Text
        textAlign="left"
        padding={{ base: "16px", lg: "26px" }}
        background="rgba(0,0,0,0.3)"
        borderRadius="12px"
      >
        Since young, I have always wanted to be an astronaut, to travel through
        the cosmos and see the stars with my very own eyes. But well, since
        Singapore doesn’t exactly have rockets, I could only choose the next
        closest thing - software development. <br /> <br /> Wait what? You’re
        telling me they aren’t similar at all? But both of them entails staring
        into space and questioning yourself...right?
      </Text>
      <Image
        src={planet1}
        alt="Blue Planet"
        width="46%"
        marginLeft={{ base: "60vw", lg: "0" }}
      />
    </Flex>
    <Flex flexDir={{ base: "column", lg: "row" }} gap="3vw">
      <Image
        src={planet2}
        alt="Saturn"
        width="160%"
        order={{ base: "2", lg: "1" }}
        marginLeft={{ base: "-35vw", lg: "0" }}
      />
      <Text
        textAlign="right"
        padding={{ base: "16px", lg: "26px" }}
        background="rgba(0,0,0,0.3)"
        borderRadius="12px"
        order={{ base: "1", lg: "2" }}
      >
        Well anyways, I got introduced to coding in secondary 1 through Scratch,
        and since then, I’ve discovered the marvels of coding, how stringing
        together text can create complex applications and solve real-world
        problems. <br />
        <br /> In my free time, I enjoy playing instruments like the guitar and
        the piano keyboard. I also enjoy cycling and taking in the nature. Other
        than these, I also like to attempt programming questions, and work on my
        own fun projects, such as this website you see here!
      </Text>
    </Flex>
  </Flex>
);

export default AboutSection;
