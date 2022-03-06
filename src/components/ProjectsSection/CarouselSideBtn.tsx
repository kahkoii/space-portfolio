import { Flex } from "@chakra-ui/react";

interface BtnProps {
  type: "prev" | "next";
  callback: (increment: number) => void;
}

const CarouselSideBtn: React.FC<BtnProps> = (props) => {
  const { type, callback } = props;
  const callbackVal = type === "prev" ? -1 : 1;

  return (
    <Flex
      onClick={() => callback(callbackVal)}
      width="10%"
      height="100%"
      justifyItems="center"
      bgColor={
        type === "prev" ? "rgba(255, 69, 84, 0.6)" : "rgba(30, 120, 168, 0.6)"
      }
      borderRadius={type === "prev" ? "60px 0 0 60px" : "0 60px 60px 0"}
      alignItems="center"
      justifyContent="center"
      fontWeight="bold"
      userSelect="none"
      cursor="pointer"
      fontSize={{ base: "lg", lg: "2xl" }}
      _hover={
        type === "prev"
          ? { bgColor: "rgba(255, 69, 84, 0.8)" }
          : { bgColor: "rgba(30, 120, 168, 0.8)" }
      }
    >
      {props.children}
    </Flex>
  );
};

export default CarouselSideBtn;
