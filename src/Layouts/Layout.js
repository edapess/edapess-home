import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <Container
      display={"flex"}
      flexDir="column"
      justifyContent={"space-between"}
      height="100%"
      minW={"100%"}
      variant="outline"
      as='div'
    >
      <Header />
      <Container as='main' minW='100%'>{children}</Container>
      <Footer />
    </Container>
  );
};

export default Layout;
