import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Planet from "../planet/Planet";
import PlanetModel from "../planet-model/PlanetModel";
import Activities from "../activities/Activities";
import Travels from "../travels/Travels";
import { useEffect } from "react";

import "./planetList.css";

const PlanetList = () => {
  const { scrollY } = useScroll();

  const soleilY = useTransform(scrollY, [0, 400], ["150%", "0%"]);

  const mercuryScrollX = useTransform(
    scrollY,
    [420, 800, 1000],
    ["-100%", "50%", "70%"]
  );
  const mercuryScrollY = useTransform(
    scrollY,
    [420, 750, 1000],
    ["-100%", "20%", "-100%"]
  );
  const mercuryScale = useTransform(
    scrollY,
    [420, 750, 1000],
    ["0.2", "1", "0.4"]
  );

  const venusScrollX = useTransform(
    scrollY,
    [845, 1220, 1420],
    ["100%", "-50%", "-70%"]
  );
  const venusScrollY = useTransform(
    scrollY,
    [845, 1000, 1500],
    ["-100%", "18%", "-200%"]
  );
  const venusScale = useTransform(
    scrollY,
    [845, 1170, 1420],
    ["0.2", "1", "0.4"]
  );

  const terreScrollX = useTransform(
    scrollY,
    [900, 1448, 1620],
    ["-100%", "50%", "70%"]
  );
  const terreScrollY = useTransform(
    scrollY,
    [900, 1448, 2500],
    ["-100%", "10%", "-100%"]
  );
  const terreScale = useTransform(
    scrollY,
    [1113, 1448, 2000],
    ["0.2", "1", "0.4"]
  );

  const marsScrollX = useTransform(
    scrollY,
    [1643, 2200, 2400],
    ["100%", "-50%", "-70%"]
  );
  const marsScrollY = useTransform(
    scrollY,
    [1643, 1700, 2200],
    ["-100%", "50%", "-100%"]
  );
  const marsScale = useTransform(
    scrollY,
    [1643, 1850, 2100],
    ["0.2", "1", "0.4"]
  );

  const jupiterScrollX = useTransform(
    scrollY,
    [1900, 2200, 2400],
    ["-100%", "50%", "70%"]
  );
  const jupiterScrollY = useTransform(
    scrollY,
    [1900, 2200, 2500],
    ["-100%", "-15%", "-100%"]
  );
  const jupiterScale = useTransform(
    scrollY,
    [2000, 2120, 2350],
    ["0.2", "1", "0.4"]
  );

  const saturneScrollX = useTransform(
    scrollY,
    [2380, 2800, 3200],
    ["100%", "-50%", "-70%"]
  );
  const saturneScrollY = useTransform(
    scrollY,
    [2380, 2450, 2600],
    ["-100%", "-100%", "-150%"]
  );
  const saturneScale = useTransform(
    scrollY,
    [2300, 2600, 2800],
    ["0.2", "2", "0.4"]
  );

  const uranusScrollX = useTransform(
    scrollY,
    [2500, 2800, 3200],
    ["-100%", "50%", "70%"]
  );
  const uranusScrollY = useTransform(
    scrollY,
    [2500, 2700, 3200],
    ["-200%", "-120%", "-200%"]
  );
  const uranusScale = useTransform(
    scrollY,
    [2500, 2750, 3200],
    ["0.2", "1", "0.4"]
  );

  const neptuneScrollX = useTransform(
    scrollY,
    [3074, 3300, 3600],
    ["100%", "-50%", "-70%"]
  );
  const neptuneScrollY = useTransform(
    scrollY,
    [3074, 3180, 3400],
    ["-200%", "-100%", "-100%"]
  );
  const neptuneScale = useTransform(
    scrollY,
    [3074, 3180, 3300],
    ["0.2", "1", "0.4"]
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

  return (
    <>
      <Box h="3900px" overflowX={"hidden"}>
        <Center>
          <Flex w="400px" direction={"column"}>
            <motion.div style={{ y: soleilY }}>
              {/* <Planet image="/images/soleil.png" /> */}
              <PlanetModel planet="soleil" size="400px" />
              <Center>
                <Text color={"white"} fontSize={"3rem"}>
                  Soleil
                </Text>
              </Center>
            </motion.div>
          </Flex>
        </Center>

        <motion.div
          style={{ y: mercuryScrollY, x: mercuryScrollX, scale: mercuryScale }}
        >
          <Flex w="300px" direction={"column"}>
            {/* <Planet image="/images/mercure.png" /> */}
            <PlanetModel planet="mercure" size="300px" />
            <Center>
              <Text color={"white"} fontSize={"3rem"}>
                Mercure
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <motion.div
          style={{ y: venusScrollY, x: venusScrollX, scale: venusScale }}
        >
          <Flex w="300px" direction={"column"}>
            {/* <Planet image="/images/venus.png" /> */}
            <PlanetModel planet="venus" size="300px" />
            <Center>
              <Text color={"white"} fontSize={"3rem"}>
                Venus
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <motion.div
          style={{ y: terreScrollY, x: terreScrollX, scale: terreScale }}
        >
          <Flex w="300px" direction={"column"}>
            {/* <Planet image="/images/terre.png" /> */}
            <PlanetModel planet="terre" size="300px" />
            <Center>
              <Text color={"white"} fontSize={"3rem"}>
                Terre
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <motion.div
          style={{ y: marsScrollY, x: marsScrollX, scale: marsScale }}
        >
          <Flex w="300px" direction={"column"}>
            {/* <Planet image="/images/mars.png" /> */}
            <PlanetModel planet="mars" size="300px" />
            <Center>
              <Text color={"white"} fontSize={"3rem"}>
                Mars
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <motion.div
          style={{ y: jupiterScrollY, x: jupiterScrollX, scale: jupiterScale }}
        >
          <Flex w="500px" direction={"column"}>
            {/* <Planet image="/images/jupiter.png" /> */}
            <PlanetModel planet="jupiter" size="500px" />
            <Center>
              <Text color={"white"} fontSize={"3rem"}>
                Jupiter
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <motion.div
          style={{ y: saturneScrollY, x: saturneScrollX, scale: saturneScale }}
        >
          <Flex w="400px" direction={"column"}>
            {/* <Planet image="/images/saturne.png" /> */}
            <PlanetModel planet="saturne" size="400px" />
            <Center>
              <Text color={"white"} fontSize={"2rem"}>
                Saturne
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <motion.div
          style={{ y: uranusScrollY, x: uranusScrollX, scale: uranusScale }}
        >
          <Flex w="300px" direction={"column"}>
            {/* <Planet image="/images/uranus.png" /> */}
            <PlanetModel planet="uranus" size="300px" />
            <Center>
              <Text color={"white"} fontSize={"2rem"}>
                Uranus
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <motion.div
          style={{ y: neptuneScrollY, x: neptuneScrollX, scale: neptuneScale }}
        >
          <Flex w="300px" direction={"column"}>
            {/* <Planet image="/images/neptune.png" /> */}
            <PlanetModel planet="neptune" size="300px" />
            <Center>
              <Text color={"white"} fontSize={"2rem"}>
                Neptune
              </Text>
            </Center>
          </Flex>
        </motion.div>
        <Activities destination="jupiter" />
        <Travels destination="soleil" />
      </Box>
    </>
  );
};

export default PlanetList;
