import { Heading, Center, Text } from "@chakra-ui/react";
import Activities from "../components/Activities";
import Travels from "../components/Travels";

const Home = () => {
  const mainStyle = {
    backgroundImage: "url(/images/background.png)",
    backgroundRepeat: "repeat",
    backgroundSize: "40%",
  };

  return (
    <div style={mainStyle}>
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
      <Activities destination="jupiter" />
      <Travels destination="jupiter" />
    </div>
  );
};

export default Home;
