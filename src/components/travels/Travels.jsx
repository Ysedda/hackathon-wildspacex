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
  Text,
  TableCaption,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import PlanetModel from "../planet-model/PlanetModel";
import { planets } from "../../assets/planets";
import { FaMonument, FaRocket } from "react-icons/fa";
import { useEffect } from "react";

const Travels = ({ destination }) => {

  const [start, setStart] = useState("default");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={() => onOpen()} key="full" m={4} zIndex="3">
        Voir les voyages
      </Button>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="#111">
          <ModalHeader m="2rem auto auto auto" color="#fff">
            Voyages vers {destination}
          </ModalHeader>
          <ModalCloseButton m="2rem 2rem auto auto" />
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
                setStart(e.target.value);
              }}
              name="select-start"
              value={start}
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
              {start !== null ? (
                start === "default" ? (
                  <Image
                    src="/images/interrogation.png"
                    w="200px"
                    bgColor="#fff"
                    borderRadius="100%"
                  />
                ) : (
                  <PlanetModel
                    planet={start
                      .normalize("NFD")
                      .replace(/\p{Diacritic}/gu, "")
                      .toLowerCase()}
                    size="200px"
                    start={start}
                  />
                )
              ) : null}
              <PlanetModel planet="rocket" size="100px" />
              <PlanetModel
                planet={destination
                  .normalize("NFD")
                  .replace(/\p{Diacritic}/gu, "")
                  .toLowerCase()}
                size="200px"
              />
            </Box>

            {start !== null && start !== "default" ? (
              <>
                {destination === "Soleil" ? (
                  <Box color="#fff">
                    Nous rappelons aux voyageurs qu'il n'y a pas d'arrêt au
                    Soleil mais seulement un tour de l'astre. Le vaisseau
                    reviendra sur la même planète après avoir fait le tour de
                    notre étoile. Merci pour votre compréhension.
                  </Box>
                ) : null}
                <TableContainer>
                  <Table>
                    <Thead>
                      <Tr>
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
                                return (
                                  <Tr key={index}>
                                    <Td color='white'>{destinationMap.dateLaunch}</Td>
                                    <Td color='white'>{destinationMap.dateArrival}</Td>
                                    <Td>
                                      <Button w="96px" rightIcon={<FaRocket />}>
                                        Go
                                      </Button>
                                    </Td>
                                  </Tr>
                                );
                              });
                          })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </>
            ) : null}
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
