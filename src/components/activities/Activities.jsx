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
  Box,
  Heading,
  Select,
  Text
} from "@chakra-ui/react";
import { planets } from "../../assets/planets";

const Activities = ({ planetName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const myPlanet = planets.filter((planet) => planet.name === planetName);
  const myPlanetActivities = {...myPlanet[0].activities}
  
  return (
    <>
      <Button onClick={() => onOpen()} key="full" m={4} zIndex="3">
        Voir les activités
      </Button>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="2rem auto auto auto">
            Activités sur {planetName}
          </ModalHeader>
          <ModalCloseButton m="2rem 2rem auto auto" />
          <ModalBody>
          {myPlanet &&
                  Object.values(myPlanetActivities).map((activity, index) => (
                    <Text key={index} color="black">
                      {activity.name}
                    </Text>
                  ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Retour au système solaire</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Activities;
