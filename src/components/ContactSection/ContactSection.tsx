import { Flex, Image, Text, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import Astronaut from "./Astronaut.svg";
import AstroShadow from "./AstroShadow.svg";
import Moon from "./Moon.svg";

interface SocialMediaProps {
  url: string;
  icon: IconType;
}

const SocialMedia: React.FC<SocialMediaProps> = (props) => {
  const { url, icon } = props;
  return (
    <Link
      href={url}
      target="_blank"
      fontSize={{ base: "md", md: "2xl" }}
      padding="8px 18px"
      borderRadius="30px"
      bgColor="blue"
    >
      <Icon as={icon} verticalAlign="bottom" marginBottom="6px" />
      <Text marginLeft="8px" fontWeight="medium" display="inline">
        {props.children}
      </Text>
    </Link>
  );
};

const ContactSection: React.FC = () => (
  <Flex
    flexDir="column"
    marginTop="40px"
    alignItems="center"
    color="white"
    position="relative"
    zIndex="2"
  >
    <Text fontSize="4xl" fontWeight="medium" id="contact">
      Contact Me
    </Text>
    <Flex
      flexDir="column"
      width="90vw"
      maxWidth="800px"
      height="50vw"
      maxHeight="300px"
      justifyContent="center"
      alignItems="center"
      gap="8px"
      bgColor="#3CD3FD"
      boxShadow={{ base: "6px 6px #FFF", md: "12px 12px #FFF" }}
      my="20px"
    >
      <SocialMedia url="https://github.com/kahkoii" icon={BsGithub}>
        GitHub: kahkoii
      </SocialMedia>
      <SocialMedia
        url="https://www.linkedin.com/in/kah-ho-swee-810bb7185"
        icon={BsLinkedin}
      >
        LinkedIn: Kah Ho Swee
      </SocialMedia>
      <SocialMedia url="mailto:sweekahho@gmail.com" icon={BsFillEnvelopeFill}>
        Email: sweekahho@gmail.com
      </SocialMedia>
    </Flex>
    <Flex
      flexDir="column"
      width="20vw"
      minWidth="90px"
      maxWidth="200px"
      alignItems="center"
      marginRight="38vw"
      position="absolute"
      bottom="8vw"
    >
      <Image
        src={Astronaut}
        alt="Astronaut"
        width="100%"
        bottom="10px"
        position="absolute"
        zIndex="3"
        id="astronaut"
      />
      <Image
        src={AstroShadow}
        bottom="-3vw"
        position="absolute"
        id="astro-shadow"
      />
    </Flex>
    <Image
      src={Moon}
      alt="Moon Surface"
      width="100%"
      maxHeight="260px"
      marginTop="60px"
    />
  </Flex>
);

export default ContactSection;
