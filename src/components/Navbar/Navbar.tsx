import { Flex } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar: React.FC = () => {
  const classes = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Contact", "contact"],
  ];

  return (
    <Flex
      flexDir="row"
      marginTop="30px"
      gap={{ base: "12px", sm: "30px", lg: "80px" }}
      fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
      textAlign="center"
      justifyContent="center"
    >
      {classes.map((link, i) => {
        return (
          <Link to={`#${link[1]}`} className="navlink" key={i}>
            {link[0]}
          </Link>
        );
      })}
    </Flex>
  );
};

export default Navbar;
