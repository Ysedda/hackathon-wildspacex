import { useState } from "react";
import {
  Button,
  Image,
  Box,
  Modal,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Heading,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import PlanetModel from "../planet-model/PlanetModel";
import Countdown from "react-countdown";
import { planets } from "../../assets/planets";
import { useEffect } from "react";
import Go from "../go/Go";
import { FaMonument, FaRocket } from "react-icons/fa";

const Travels = ({ destination }) => {
  const [start, setStart] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSelect = (e) => {
    setStart("");
    setTimeout(() => {setStart(e.target.value)}, 0);
  };

  return (
    <>
      <Button
        onClick={() => onOpen()}
        key="full"
        m={4}
        zIndex="3"
        bgColor="#084674"
        color="#fff"
        fontWeight="100"
        _hover={{ color: "#000", bgColor: "#358dce" }}
      >
        Voir les voyages
      </Button>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="#111">
          <ModalHeader m="2rem auto auto auto" color="#fff">
            Voyages vers {destination}
          </ModalHeader>
          <ModalCloseButton m="2rem 2rem auto auto" color="#fff" />
          <ModalBody>
            <Heading
              m="auto"
              fontSize="1.5rem"
              color="#fff"
              fontFamily="JetBrains Mono, monospace"
              textAlign="center"
            >
              Choisissez votre planète de départ
            </Heading>
            <Select
              placeholder="Sélectionner..."
              w="500px"
              m="1rem auto"
              color="#000"
              bgColor="var(--chakra-colors-gray-100)"
              onChange={(e) => {
                handleSelect(e);
              }}
              name="select-start"

            >
              {planets
                .filter(
                  (planet) =>
                    planet.name !== destination && planet.name !== "Soleil"
                )
                .map((planet, index) => (
                  <option key={index} value={planet.name}>
                    {planet.name}
                  </option>
                ))}
            </Select>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              m="3rem auto"
            >
              {start === "" ? (
                  <Image
                    src="/images/interrogation.png"
                    w="200px"
                    bgColor="#fff"
                    borderRadius="100%"
                  />
                ) : (
                  <>
                    <PlanetModel
                      planet={start
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                        .toLowerCase()}
                      size="200px"
                    />
                    <PlanetModel planet="rocket" size="100px" />
                  </>
                )}
              <PlanetModel
                planet={destination
                  .normalize("NFD")
                  .replace(/\p{Diacritic}/gu, "")
                  .toLowerCase()}
                size="200px"
              />
            </Box>

            {start !== "" ? (
              <>
                {destination === "Soleil" ? (
                  <Box
                    color="#ff0000"
                    maxW="800px"
                    m="2rem auto"
                    textAlign="center"
                  >
                    Nous rappelons aux voyageurs qu'il n'y a évidemment pas
                    d'arrêt sur le Soleil. Après avoir fait le tour de l'étoile,
                    le vaisseau-voyageur repart ensuite pour sa station de
                    lancement. Merci pour votre compréhension.
                  </Box>
                ) : <Box></Box>}
                <TableContainer>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>Décollage dans...</Th>
                        <Th>Départ</Th>
                        <Th>Arrivée</Th>
                        <Th>Réserver</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {planets &&
                        planets
                          .filter((planet) => planet.name === start)
                          .map((planet) => {
                            return planet.destinations
                              .filter(
                                (destinationFilter) =>
                                  destinationFilter.planet === destination
                              )
                              .map((destinationMap, index) => {
                                const dateLaunch = new Date(
                                  destinationMap.dateLaunch
                                );
                                const dateArrival = new Date(
                                  destinationMap.dateArrival
                                );
                                const rebours =
                                  dateArrival.getTime() - dateLaunch.getTime();

                                return (
                                  <Tr key={index}>
                                    <Td color="white">
                                      <Countdown
                                        date={Date.now() + rebours}
                                        renderer={(props) => (
                                          <Box>
                                            {props.hours}h, {props.minutes} min,{" "}
                                            {props.seconds} sec
                                          </Box>
                                        )}
                                      />
                                    </Td>
                                    <Td color="white">
                                      {dateLaunch.toLocaleDateString()}
                                    </Td>
                                    <Td color="white">
                                      {dateArrival.toLocaleDateString()}
                                    </Td>
                                    <Td>
                                      <Go />
                                    </Td>
                                  </Tr>
                                );
                              });
                          })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </>
            ) : <Box></Box>}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Retour au système solaire</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Travels;
