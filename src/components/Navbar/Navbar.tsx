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
      flexDir={{ base: "column", sm: "row" }}
      marginTop={{ base: "20vh", sm: "30vh", lg: "300px" }}
      gap={{ base: "8px", sm: "30px", lg: "80px" }}
      fontSize={{ base: "2xl", lg: "3xl" }}
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
