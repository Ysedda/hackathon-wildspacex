import { useState } from "react";
import {
  Button,
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
} from "@chakra-ui/react";
import PlanetModel from "../planet-model/PlanetModel";

const Travels = ({ destination }) => {
  const options = [
    {
      id: 1,
      value: "soleil",
      name: "Soleil",
    },
    {
      id: 2,
      value: "mercure",
      name: "Mercure",
    },
    {
      id: 3,
      value: "venus",
      name: "Vénus",
    },
    {
      id: 4,
      value: "terre",
      name: "Terre",
    },
    {
      id: 5,
      value: "mars",
      name: "Mars",
    },
    {
      id: 6,
      value: "jupiter",
      name: "Jupiter",
    },
    {
      id: 7,
      value: "saturne",
      name: "Saturne",
    },
    {
      id: 8,
      value: "uranus",
      name: "Uranus",
    },
    {
      id: 9,
      value: "neptune",
      name: "Neptune",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={() => onOpen()} key="full" m={4}>
        Voir les voyages
      </Button>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="2rem auto auto auto">
            Voyages vers {destination}
          </ModalHeader>
          <ModalCloseButton m="2rem 2rem auto auto" />
          <ModalBody>
            <Heading
              m="auto"
              fontSize="1.5rem"
              fontFamily="inherit"
              textAlign="center"
            >
              Choisissez votre planète de départ
            </Heading>
            <Select
              placeholder="Sélectionner..."
              w="500px"
              m="1rem auto"
              onChange={(e) => {
                setSelectedOption(e.target.value);
              }}
              value={selectedOption}
            >
              {options.map((option) => {
                option.id === selectedOption.id ? (
                  <option key={option.id} value={option} selected>
                    {option.name}
                  </option>
                ) : (
                  <option key={option.id} value={option}>
                    {option.name}
                  </option>
                );
              })}
            </Select>
            <PlanetModel planet={destination} size="200px" />
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
