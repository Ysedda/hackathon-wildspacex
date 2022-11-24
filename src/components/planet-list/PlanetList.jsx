import { motion, useScroll, useTransform } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Planet from "../planet/Planet";
import { useEffect } from "react";

const PlanetList = () => {
  const { scrollY } = useScroll();
  const terreScrollX = useTransform(scrollY, [50, 500, 900, 1500], ["-50%", "10%", "60%", "150%"]);
  const terreScrollY = useTransform(scrollY, [50, 500, 900 , 1500], ["-150%", "0%", "50%", "-0%"]);
  const terreScale = useTransform(scrollY, [50, 500, 1000], ["0.1", "1", "0.1"]);

  const marsScrollX = useTransform(scrollY, [850, 800, 1500], ["100%", "100%", "-50%"]);
  const marsScrollY = useTransform(scrollY, [300, 800, 1500], ["-200%", "0%", "-100%"]);
  const marsScale = useTransform(scrollY, [500,  1000 , 1500], ["0.1", "1", "0.1"]);

  // useEffect(() => {
  //   return scrollY.onChange((latest) => {
  //     console.log("Page scroll: ", latest)
  //   })
  // }, [])

  return (
    <>
      <Box h="10000px" overflowX={"hidden"}>
        <motion.div style={{ y: terreScrollY, x: terreScrollX, scale: terreScale }}>
          <Box w="25%">
            <Planet />
          </Box>
        </motion.div>
        <motion.div style={{ y: marsScrollY, x: marsScrollX, scale: marsScale }}>
          <Box w="25%">
            <Planet />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default PlanetList;
