import { Box, Image } from "@chakra-ui/react";

const Planet = ({ image, size }) => {
  return (
    <Box w={size}>
      <Image src={image} />
    </Box>
  );
};

export default Planet;
