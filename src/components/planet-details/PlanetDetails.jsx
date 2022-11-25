import { Heading, Image, Text, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./planet-details.css";
import { planets } from "../../assets/planets";
import Activities from "../activities/Activities";
import Travels from "../travels/Travels";
import { TbArrowsDiagonal } from "react-icons/tb";
import { TiThermometer } from "react-icons/ti";
import { GiWeight } from "react-icons/gi";

const PlanetDetails = ({ planet, currentScale }) => {
  const planetName = planet;
  const planetNameLower = planet
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

  // const [planetName, setPlanetName] = useState("");
  const [planetRadius, setPlanetRadius] = useState("");
  const [planetTemperature, setPlanetTemperature] = useState("");
  const [planetGravity, setPlanetGravity] = useState("");
  const [calculScale, setCalculScale] = useState(1);

  useEffect(() => {
    if (currentScale && calculScale === 1) {
      const dif = 1 / parseFloat(currentScale);
      setCalculScale((1 + dif) / 2);
    }
  }, []);

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const res = await fetch(
          `https://api.le-systeme-solaire.net/rest/bodies/${planetNameLower}`
        );
        const planet = await res.json();
        // setPlanetName(planet.name);
        setPlanetRadius(planet.meanRadius);
        setPlanetTemperature(planet.avgTemp);
        setPlanetGravity(planet.gravity);
      } catch (error) {
        console.error(error);
      }
    };
    getPlanet();
  }, []);

  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, []);

  return (
    <motion.div
      id="cards"
      key="card"
      style={{ transformOrigin: "0 100%" }}
      initial={{ scale: 0 }}
      animate={{ scale: calculScale }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
    >
      <div className="card">
        <div className="card-content">
          <Flex w="100%" justifyContent={"center"}>
            <Heading as="h1" color="white" size="2xl" marginBlock="10px">
              {planetName}
            </Heading>
          </Flex>
          <div className="card-image">
            <Image src={`/images/${planetNameLower}.png`}></Image>
          </div>
          <div className="card-info-wrapper">
            <Flex className="card-info" flexDirection={"column"}>
              <div className="card-info-title">
                <Flex alignItems="center" gap="10px">
                  <TbArrowsDiagonal color="white" opacity="0.6" size={"20px"} />
                  <Text color="whiteAlpha.600">{planetRadius} km de rayon</Text>
                </Flex>
                <Flex alignItems="center" gap="10px">
                  <TiThermometer color="white" opacity="0.6" size={"20px"} />

                  <Text color="whiteAlpha.600">
                    {planetTemperature - 273} degrés °C
                  </Text>
                </Flex>
                <Flex alignItems="center" gap="10px">
                  <GiWeight color="white" opacity="0.6" size={"20px"} />
                  <Text color="whiteAlpha.600">
                    {(planetGravity / 9.81).toFixed(1)}x la gravité terreste
                  </Text>
                </Flex>
                {/* <Heading
                  as="h1"
                  color="white"
                  size="md"
                  marginBlockStart="20px"
                  marginBlockEnd={"10px"}
                >
                  Activités
                </Heading>
                {jupiterActivities2 &&
                  Object.values(jupiterActivities2).map((activity, index) => (
                    <Text key={index} color="whiteAlpha.600">
                      {activity.name}
                    </Text>
                  ))} */}
                  <Flex w='100' justifyContent={'center'}>
                <Activities destination={planetName} />
                <Travels destination={planetName} /></Flex>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanetDetails;
