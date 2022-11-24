import { motion, useScroll, useTransform } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Planet from "../planet/Planet";

const PlanetList = () => {
  const { scrollY } = useScroll();
  const terreScrollX = useTransform(scrollY, [0, 500, 1000, 1500], ["-50%", "10%", "60%", "100%"]);
  const terreScrollY = useTransform(scrollY, [0, 500, 1000 , 1500], ["-150%", "0%", "50%", "-0%"]);
  const marsScrollX = useTransform(scrollY, [300, 800, 1300, 1800], ["200%", "100%", "-50%", "-100%"]);
  const marsScrollY = useTransform(scrollY, [300, 800, 1300, 1800], ["-100%", "0%", "50%", "-500%"]);
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
