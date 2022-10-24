import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import WelcomeBlock from "./WelcomeBlock";

const HomeScreen = () => {
  return (
    <Box
      variant="outline"
      display={"flex"}
      flexDir="row"
      minW={"100%"}
      height={'100%'}
      as="div"
    >
      <WelcomeBlock />
    </Box>
  );
};

export default HomeScreen;
