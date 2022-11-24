import { motion, useScroll, useTransform } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Planet from "../planet/Planet";

const PlanetList = () => {
  const { scrollY } = useScroll();
  const terreScrollX = useTransform(scrollY, [0, 550], ["-50%", "10%"]);
  const terreScrollY = useTransform(scrollY, [0, 550], ["-0%", "100%"]);
  const marsScrollX = useTransform(scrollY, [350, 900], ["100%", "60%"]);
  const marsScrollY = useTransform(scrollY, [350, 900], ["0%", "100%"]);
  const venusScroll = useTransform(scrollY, [0, 700], [0, 300]);
  const saturnScroll = useTransform(scrollY, [0, 700], [0, 300]);
  const uranusScroll = useTransform(scrollY, [0, 700], [0, 300]);
  const jupiterScroll = useTransform(scrollY, [0, 700], [0, 300]);
  const neptuneScroll = useTransform(scrollY, [0, 700], [0, 300]);
  const mercureScroll = useTransform(scrollY, [0, 700], [0, 300]);

  return (
    <>
      <Box h="10000px" overflowX={"hidden"} backgroundColor={"black"}>
        <motion.div style={{ y: terreScrollY, x: terreScrollX }}>
          <Box w="25%">
            <Planet />
          </Box>
        </motion.div>
        <motion.div style={{ y: marsScrollY, x: marsScrollX }}>
          <Box w="25%">
            <Planet />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default PlanetList;
