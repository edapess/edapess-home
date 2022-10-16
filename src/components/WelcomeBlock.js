import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import profPick from "../assets/edapeBack.png";
class WelcomeBlock extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <Container
        display={"flex"}
        minW="100%"
        alignItems={"center"}
        paddingTop='20px'
      >
        <Box borderWidth='3px' as='div' display={"flex"} justifyContent='center' width="100%">
          <Image src={profPick} alt="hero" borderWidth='4xp'/>
        </Box>
          <Box>
          <Heading as='h1' color='textLight'>Edmond Avetisyan</Heading>
        </Box>
      </Container>
    );
  }
}

export default WelcomeBlock;
