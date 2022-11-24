import { Heading, Center, Text } from "@chakra-ui/react";
import PlanetList from "../components/planet-list/PlanetList";

const Home = () => {
  return (
    <div>
      <Center>
        <Heading as="h1" size="4xl" fontSize="200px" m="100px">
          WildSpaceX
        </Heading>
      </Center>
      <Text fontSize="25px" margin="40px">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        nesciunt tenetur vero earum ullam sed voluptate illo autem aliquam
        voluptates. Placeat quidem sed perferendis cumque nisi repellendus,
        dolor ullam! Similique. Accusamus, aperiam cum aliquid dolorum molestiae
        provident possimus nihil est fugiat repellendus, necessitatibus dicta
      </Text>
      <PlanetList />
    </div>
  );
};

export default Home;
