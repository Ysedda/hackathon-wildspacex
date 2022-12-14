import { Box, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, Flex } from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai";

const Citation = () => {
  return (
    <Box display="flex" justifyContent="space-evenly">
      <Card maxW="sm">
        <CardBody>
          <Image
            src="images/interstellar-trou-noir.webp"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            backgroundPosition={"cover"}
            height={"200px"}
          />
          <Stack mt="6" spacing="3">
            <Divider />
            <Heading size="md" color="yellow.600">
              Saturne / 15/08/2022
            </Heading>
            <Text color="white">
              Un superbe moment de partage, j'avais jamais vu un trou d'aussi
              prêt. Il manque peut-être d'animation autour de ce trou, j'aurais
              aimé mettre des choses dedans.
            </Text>
            <Text color="yellow.600" fontSize="3xl">
              <Flex>
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              </Flex>
            </Text>
          </Stack>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="images/soleil-sourire.jpeg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            backgroundPosition={"cover"}
            height={"200px"}
          />
          <Stack mt="6" spacing="3">
            <Divider />
            <Heading size="md" color="yellow.600">
              Soleil / 28/10/2022{" "}
            </Heading>
            <Text color="white">
              Tout simplement une anarnaque!!! On m'a vendu un bronzage au
              top... je suis revenu sans peau, parce qu'on ne mentionne pas
              l'indice UV avant l'exposition avec le Soleil! Une honte
            </Text>
            <Text color="yellow.600" fontSize="3xl">
              <Flex>
                <AiFillStar />
              </Flex>
            </Text>
          </Stack>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="images/vaisseau.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            backgroundPosition={"cover"}
            height={"200px"}
          />
          <Stack mt="6" spacing="3">
            <Divider />
            <Heading size="md" color="yellow.600">
              Uranus / 06/10/2022
            </Heading>
            <Text color="white" h="144px">
              Plus de 30 minutes pour faire Terre - Uranus!! Hereusement j'ai pu
              me faire blanchir rapidement pour mon date du soir! La prochaine
              fois donner des coupons de reduction!
            </Text>
            <Text color="yellow.600" fontSize="3xl">
              <Flex>
                <AiFillStar />
                <AiFillStar />
              </Flex>
            </Text>
          </Stack>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </Box>
  );
}

export default Citation