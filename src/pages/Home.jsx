import { useEffect } from "react";
import Citation from "../components/citation/Citation";
import { Text, Flex, Box, Image } from "@chakra-ui/react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import PlanetList from "../components/planet-list/PlanetList";
import PlanetModel from "../components/planet-model/PlanetModel";
import "./home.css";
import PlanetDetails from "../components/planet-details/PlanetDetails";


const Home = () => {
  const homeStyle = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(/images/background.png)",
    backgroundRepeat: "repeat",
    backgroundSize: "40%",
    backdropFilter: "opacity(10%)",
  };

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
    <div style={homeStyle}>
      <PlanetDetails/>
      <Box
        className="bouncing-astronaut"
        position={"absolute"}
        top={"100vh"}
        left={"0"}
        height={"100vh"}
        w={"100%"}
        zIndex={"2"}
        overflowX={"hidden"}
      >
        <Box>
          <Image src="/images/astronaut-640x640.png" />
        </Box>
      </Box>
      <MouseParallaxContainer
        className="parallax"
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave
      >
        <MouseParallaxChild
              factorX={-0.1}
              factorY={0.1}
              style={{
                background:
                  "url('/images/galaxy-header-bg.png') no-repeat center center",
                position: "absolute",
                backgroundPosition: "20% 30%",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
              }}
          />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt={"300px"}
          pb={"100px"}
          w="100%"
        >
          <MouseParallaxChild
            className="decode-text"
            factorX={0.1}
            factorY={0.1}
          >
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              W
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              i
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              l
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              d
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              S
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              p
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              a
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              c
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              e
            </MouseParallaxChild>
            <MouseParallaxChild
              className="text-animation"
              factorX={0.1}
              factorY={0.1}
            >
              X
            </MouseParallaxChild>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={-0.3} factorY={0.3}>
            <Text
              fontSize="25px"
              marginBottom="40px"
              color="white"
              className="title-fade-in"
            >
              1ère agence de voyage touristique spatial en France
            </Text>
          </MouseParallaxChild>

          <Box className="sub-border" marginTop="15px"></Box>
        </Flex>
      </MouseParallaxContainer>
      <PlanetList />
      <Citation />
    </div>
  );
};

export default Home;
