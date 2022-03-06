import { Flex, Text, Image, Circle } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import projects from "../../resources/projects.json";
import CarouselSideBtn from "./CarouselSideBtn";

const ProjectsSection: React.FC = () => {
  const totalProjects = projects.length;
  const [currentProj, setCurrentProj] = useState(0);
  const slideIntervalMS = 3000;
  let time = Date.now();
  let prevTime = time;
  let cProj = 0;

  const updateCurrentProj = (increment: number) => {
    if (increment === 1) {
      cProj = (cProj + 1) % totalProjects;
    } else {
      cProj = cProj === 0 ? totalProjects - 1 : cProj - 1;
    }
    setCurrentProj(cProj);
  };

  const checkTime = () => {
    time = Date.now();
    if (time - prevTime >= slideIntervalMS) {
      updateCurrentProj(1);
      prevTime = Date.now();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => checkTime(), 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      flexDir="column"
      marginTop="80px"
      alignItems="center"
      width="100%"
      color="white"
      position="relative"
      zIndex="2"
    >
      <Text
        fontSize="4xl"
        fontWeight="medium"
        marginBottom="12px"
        id="projects"
      >
        Projects
      </Text>
      <Flex flexDir="row" height="540px">
        <CarouselSideBtn type="prev" callback={updateCurrentProj}>
          {"<"}
        </CarouselSideBtn>
        <Flex
          flexDir="column"
          width="88vw"
          bgColor="white"
          alignItems="center"
          padding="12px"
        >
          {projects.map((proj, i) => {
            const image =
              require(`../../resources/images/${proj.file}`).default;
            return (
              <Flex
                width="100%"
                height="93%"
                display={currentProj === i ? "initial" : "none"}
                key={i}
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="medium"
                  textAlign="center"
                  color="black"
                  marginBottom="8px"
                >
                  {proj.name}
                </Text>
                <Flex height="91%" justifyContent="center" alignItems="center">
                  <Image
                    src={image}
                    maxH="430px"
                    boxShadow="lg"
                    cursor={proj.url === "" ? "initial" : "pointer"}
                    onClick={() => {
                      if (proj.url !== "") {
                        window.open(proj.url, "_blank");
                      }
                    }}
                  />
                </Flex>
              </Flex>
            );
          })}
          <Flex marginTop="12px" gap="16px">
            {projects.map((p, i) => {
              return (
                <Circle
                  size="14px"
                  onClick={() => setCurrentProj(i)}
                  bgColor={currentProj === i ? "#000" : "#BBB"}
                  cursor="pointer"
                  key={i}
                />
              );
            })}
          </Flex>
        </Flex>
        <CarouselSideBtn type="next" callback={updateCurrentProj}>
          {">"}
        </CarouselSideBtn>
      </Flex>
    </Flex>
  );
};

export default ProjectsSection;
