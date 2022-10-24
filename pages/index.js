import { Box, Container, Text } from "@chakra-ui/react";
import HomeScreen from "../src/components/HomeScreen/HomeScreen";

const Home = () => {
  return (
    <Box
      display="flex"
      alignItems="ceter"
      justifyContent={"space-between"}
      flexDir="column"
      variant={"outline"}
      margin="0"
      height={"100vh"}
      minW="100%"
      as="div"
    >
      <HomeScreen />
    </Box>
  );
};

export default Home;
