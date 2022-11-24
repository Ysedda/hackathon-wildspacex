import { Box, Flex, Image } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Planet = ({ image, direction}) => {

  const directionStyle = direction % 2 === 0 ? "row" : "row-reverse";
  // const ref = useRef(null);
  // const isInView = useInView(ref, { margin: "0px 0px -50% 0px"});

  return (
      <Box
        w="600px"
      >
        <Image src="https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P.jpg" />
      </Box>
  );
};

export default Planet;
