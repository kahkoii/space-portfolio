import { chakra, Flex, Text } from "@chakra-ui/react";
import SkillRow from "./SkillRow";
import skills from "../../resources/skills.json";
import resume from "../../resources/SweeKahHo_CV.pdf";

const SkillsSection: React.FC = () => (
  <Flex
    flexDir="column"
    marginTop="40px"
    alignItems="center"
    color="white"
    position="relative"
    zIndex="2"
  >
    <Text fontSize="4xl" fontWeight="medium" id="skills">
      My Skills
    </Text>
    <Text color="#B2A6FF" fontSize={{ base: "xl", md: "2xl" }}>
      <chakra.a href={resume} download="SweeKahHo_CV.pdf">
        click here to download full resume
      </chakra.a>
    </Text>
    <Flex width="90vw" maxW="1000px" flexDir="column">
      <Flex
        justifyContent="space-between"
        fontSize="2xl"
        px={{ base: "8vw", lg: "60px" }}
      />
      <Flex flexDir="column" gap="8px" marginTop="18px">
        {skills.map((row, i) => {
          return <SkillRow data={row} key={i} />;
        })}
      </Flex>
    </Flex>
  </Flex>
);

export default SkillsSection;
