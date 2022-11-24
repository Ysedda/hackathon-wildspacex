import { useEffect } from "react";
import { Text, Flex, Box, Image } from "@chakra-ui/react";
import PlanetList from "../components/planet-list/PlanetList";
import "./home.css";

const Home = () => {
  useEffect(() => {
    function decodeText() {
      var text = document.getElementsByClassName("decode-text")[0];
      // debug with
      //   console.log(text, text.children.length);

      // assign the placeholder array its places
      var state = [];
      for (var i = 0, j = text.children.length; i < j; i++) {
        text.children[i].classList.remove("state-1", "state-2", "state-3");
        state[i] = i;
      }

      // shuffle the array to get new sequences each time
      var shuffled = shuffle(state);

      for (var i = 0, j = shuffled.length; i < j; i++) {
        var child = text.children[shuffled[i]];

        var classes = child.classList;

        // fire the first one at random times
        var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
        if (classes.contains("text-animation")) {
          setTimeout(firstStages.bind(null, child), state1Time);
        }
      }
    }

    // send the node for later .state changes
    function firstStages(child) {
      if (child.classList.contains("state-2")) {
        child.classList.add("state-3");
      } else if (child.classList.contains("state-1")) {
        child.classList.add("state-2");
      } else if (!child.classList.contains("state-1")) {
        child.classList.add("state-1");
        setTimeout(secondStages.bind(null, child), 100);
      }
    }
    function secondStages(child) {
      if (child.classList.contains("state-1")) {
        child.classList.add("state-2");
        setTimeout(thirdStages.bind(null, child), 100);
      } else if (!child.classList.contains("state-1")) {
        child.classList.add("state-1");
      }
    }
    function thirdStages(child) {
      if (child.classList.contains("state-2")) {
        child.classList.add("state-3");
      }
    }

    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    // Demo only stuff
    decodeText();
  }, []);
  return (
    <div>
      <Box className="bouncing-astronaut" position={"absolute"} top={"100vh"} left={"0"} height={"100vh"} w={"100%"} zIndex={"2"} overflowX={"hidden"}>
        <Box>
          <Image src="/assets/images/astronaut-640x640.png" />
        </Box>
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="100%"
      >
        <div className="decode-text">
          <div className="text-animation">W</div>
          <div className="text-animation">i</div>
          <div className="text-animation">l</div>
          <div className="text-animation">d</div>
          <div className="text-animation">S</div>
          <div className="text-animation">p</div>
          <div className="text-animation">a</div>
          <div className="text-animation">c</div>
          <div className="text-animation">e</div>
          <div className="text-animation">X</div>
        </div>
        <Text
          fontSize="25px"
          marginBottom="40px"
          color="white"
          className="title-fade-in"
        >
          1ère agence de voyage touristique spatial en France
        </Text>
        <Box className="sub-border" marginTop="15px"></Box>
      </Flex>
      <PlanetList />
    </div>
  );
};

export default Home;
