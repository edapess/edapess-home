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
    const colorMode = this.props.colorMode
    return (
      <Container
        display={"flex"}
        minW="100%"
        height={'100%'}
        alignItems={{base: 'center', lg:"flex-start"}}
        justifyContent={{base: 'center', lg:"space-between"}}
        padding='20px 0px 0px 0px'
        flexDirection={{base: 'column',lg: 'row'}}
      >
      <AboutAuthor colorMode={colorMode}/>
          <Box 
          borderWidth={3}
          display={'flex'}
          borderRadius={10}
          justifyContent='center'
          alignItems={ 'center'}
          as='div' 
          borderColor={colorMode === 'dark' ? 'error' : 'orangeDark'}
          height={'40%'}
          width={{base: '100%', lg: '40%'}}
          padding='10'
        >
        <Story/>
        </Box>
      </Container>
    );
  }
}

export default WelcomeBlock;
