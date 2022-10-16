import { Box, Container, Text } from "@chakra-ui/react";
import WelcomeBlock from "./WelcomeBlock";

const HomeScreen = () => {
  return (
    <Box
      variant="outline"
      display={"flex"}
      flexDir="row"
      minW={"100%"}
      height={"max-content"}
      as="div"
    >
      <WelcomeBlock />
    </Box>
  );
};

export default HomeScreen;
