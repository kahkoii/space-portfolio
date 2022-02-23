import { Box, Circle } from "@chakra-ui/react";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max + 1);
};

const getStarProps = (rand: number): [string, string, number] => {
  // returns star color, shadow color, shadow blur value
  if (rand <= 0.5) {
    return ["rgba(255,255,255, 1)", "rgba(255, 255, 255, 0.5)", 3];
  } else if (rand > 0.75) {
    return ["rgba(255,254, 196, 1)", "rgba(255, 254, 196, 0.5)", 4];
  }
  return ["rgba(192, 247, 255, 1)", "rgba(192, 247, 255, 0.5)", 7];
};

const Star: React.FC = () => {
  const starProps = getStarProps(Math.random());
  const size = getRandomInt(10);
  const spreadRadius = getRandomInt(3);
  const x = getRandomInt(window.innerWidth - 18);
  const y = getRandomInt(window.innerHeight - 18);

  return (
    <Circle
      bgColor={starProps[0]}
      boxShadow={`0 0 ${starProps[2]}px ${spreadRadius}px ${starProps[1]}`}
      size={`${size}px`}
      left={`${x}px`}
      top={`${y}px`}
      position="absolute"
      zIndex="1"
    />
  );
};

const SpaceBG: React.FC = () => {
  const stars = 60;
  return (
    <Box width="100%" height="100%" overflow="hidden">
      {[...Array(stars)].map((e, i) => {
        return <Star key={i} />;
      })}
    </Box>
  );
};

export default SpaceBG;
