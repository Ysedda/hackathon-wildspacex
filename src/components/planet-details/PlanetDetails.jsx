import { Heading, Image, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./planet-details.css";
import { planets } from "../../assets/planets";

const PlanetDetails = ({ planet, currentScale }) => {
  const [planetName, setPlanetName] = useState("");
  const [planetRadius, setPlanetRadius] = useState("");
  const [planetTemperature, setPlanetTemperature] = useState("");
  const [planetGravity, setPlanetGravity] = useState("");
  const [calculScale, setCalculScale] = useState(1);

  useEffect(() => {
    if (currentScale && calculScale === 1) {
      const dif = 1 / parseFloat(currentScale);
      console.log((1+dif)/2);
      setCalculScale((1+dif)/2);
    }
  }, []);

  const jupiterActivities = planets.filter(
    (planet) => planet.name === "Jupiter"
  );
  const jupiterActivities2 = { ...jupiterActivities[0].activities };

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const res = await fetch(
          "https://api.le-systeme-solaire.net/rest/bodies/jupiter"
        );
        const planet = await res.json();
        setPlanetName(planet.name);
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
            <Image src="/public/images/jupiter.png"></Image>
          </div>
          <div className="card-info-wrapper">
            <Flex className="card-info" flexDirection={"column"}>
              <div className="card-info-title">
                <Text color="whiteAlpha.600">{planetRadius} km de rayon</Text>
                <Text color="whiteAlpha.600">
                  {planetTemperature - 273} degrés °C
                </Text>
                <Text color="whiteAlpha.600">
                  {(planetGravity / 9.81).toFixed(1)}x la gravité terreste
                </Text>
                <Heading
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
                  ))}
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanetDetails;
