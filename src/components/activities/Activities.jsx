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
  Text,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter
} from "@chakra-ui/react";
import { planets } from "../../assets/planets";

const Activities = ({ planetName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const myPlanet = planets.filter((planet) => planet.name === planetName);
  const myPlanetActivities = { ...myPlanet[0].activities };

  return (
    <>
      <Button
        onClick={() => onOpen()}
        key="full"
        m={4}
        zIndex="3"
        bgColor="#085c03"
        color="#fff"
        fontWeight="100"
        _hover={{ color: "#000", bgColor: "#3ba135" }}
      >
        Voir les activités
      </Button>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="#111">
          <ModalHeader m="2rem auto auto auto" color="#fff">
            Activités sur {planetName}
          </ModalHeader>
          <ModalCloseButton m="2rem 2rem auto auto" />
          <ModalBody 
          display='flex'
          justifyContent="space-around"
          >
            {myPlanet &&
              Object.values(myPlanetActivities).map((activity, index) => 
                <Card w="500px"
                h="500px"
                key={index}>
                  <CardBody>
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      borderRadius='lg'
                      w="xl"
                      minH="60%"
                    />
                    <Stack mt='6' spacing='3'>
                      <Divider />
                      <Heading size='md'
                        color='yellow.600'>{activity.name}</Heading>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                  </CardFooter>
                </Card>
              )}
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
