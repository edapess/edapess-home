import React from "react";
import { Box, Container,Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Story from "./Story";
import AboutAuthor from "./AboutAuthor";

class WelcomeBlock extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Container
        display={"flex"}
        minW="100%"
        alignItems={{base: 'center', lg:"flex-start"}}
        justifyContent={{base: 'center', lg:"space-between"}}
        padding='20px 0px 0px 0px'
        flexDirection={{base: 'column',lg: 'row'}}
      >
      <AboutAuthor/>
          <Box 
          display={'flex'}
          borderRadius={10}
          justifyContent='center'
          alignItems={ 'center'}
          as='div' 
          height={'40%'}
          width={'40%'}
        >
        <Story/>
        </Box>
      </Container>
    );
  }
}

export default WelcomeBlock;
