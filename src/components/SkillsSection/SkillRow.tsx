import { Flex, Text, Image, Box, useDisclosure } from "@chakra-ui/react";
import { SkillData } from "./SkillData.interface";
import rocket from "./rocket.svg";
import SkillModal from "./SkillModal";

const SkillRow: React.FC<{ data: SkillData }> = (props) => {
  const { data } = props;
  const image = require(`../../resources/images/${data.file}`).default;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const rocketSize = "100px";

  return (
    <Flex
      bgColor="white"
      borderRadius="50px"
      height="80px"
      color="black"
      padding="10px 24px"
      alignItems="center"
      gap="16px"
      onClick={onOpen}
      cursor="pointer"
      _hover={{
        bgColor: "#DDD",
      }}
    >
      <SkillModal data={data} isOpen={isOpen} onClose={onClose} />
      <Image src={image} width="40px" height="40px" />
      <Text
        fontWeight="medium"
        width="8vw"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        display={{ base: "none", md: "initial" }}
      >
        {data.name}
      </Text>
      <Flex height="100%" width="100%">
        <Flex
          width={`${data.proficiency}%`}
          minWidth={{ base: "0", md: rocketSize }}
          height="100%"
          alignItems="center"
        >
          <Box
            bgColor="#FFBE15"
            borderRadius="30px"
            width="100%"
            height="12px"
          />
          <Image
            src={rocket}
            width={rocketSize}
            position="relative"
            marginRight="0"
            marginLeft="auto"
            display={{ base: "none", md: "initial" }}
          />
        </Flex>
      </Flex>
      <Text fontSize={{ base: "xl", lg: "3xl" }} color="#0098DA" width="108px">
        {data.proficiency}%
      </Text>
    </Flex>
  );
};

export default SkillRow;
