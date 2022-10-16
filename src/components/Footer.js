import { Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      display={"flex"}
      minW="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg="pink"
    >
      <Text>footer</Text>
    </Container>
  );
};

export default Footer;
