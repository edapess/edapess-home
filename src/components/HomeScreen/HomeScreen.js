import React from "react";
import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import WelcomeBlock from "./WelcomeBlock";

const HomeScreen = () => {
     const {colorMode} = useColorMode() 
  return (
    <Box
      variant="outline"
      display={"flex"}
      flexDir="row"
      minW={"100%"}
      height={'100%'}
      as="div"
    >
      <WelcomeBlock colorMode={colorMode}/>
    </Box>
  );
};

export default HomeScreen;
