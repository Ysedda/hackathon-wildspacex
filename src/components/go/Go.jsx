import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Button, useDisclosure, Text } from "@chakra-ui/react";
import React from "react";
import { FaRocket } from "react-icons/fa";

const Go = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button w="96px" rightIcon={<FaRocket />} onClick={onOpen}>
        Go
      </Button>

<Modal isOpen={isOpen} onClose={onClose} isCentered size='xl'>
  <ModalOverlay />
  <ModalContent backgroundColor={'gray.700'} color='white'>
    <ModalHeader as='h1' fontSize={'4xl'} textAlign='center'>Attention</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text m='10px'>Merci de l'intérêt que vous portez à notre entreprise.</Text>
      <Text m='10px'>Malheureusement, nos voyages sont exclusivement réservés à une clientèle d'élite aux revenus plus que confortables.</Text>
      <Text m='10px'>De ce fait, il vous est impossible de procéder à une réservation en ligne</Text>
      <Text m='10px' mb='20px'>Toutefois, si vous êtes intéressés et possédez les moyens, merci de nous contacter directement :</Text>
      <Text mx='10px'>06 33 29 17 70</Text>
      <Text mx='10px'>wildspaceX@wildcodeschool.com</Text>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='red' mr={3} onClick={onClose} textColor='white'>
        J'ai compris
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </>
  );
};

export default Go;
