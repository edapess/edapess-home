import React from "react";
import { Box, Container,Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import profPick from "../assets/edapeBack.png";

class WelcomeBlock extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Container
        display={"flex"}
        minW="100%"
        alignItems={"flex-start"}
        justifyContent='space-between'
        padding='20px 0px 0px 0px'
      >
        <Box 
          borderWidth='3px' 
          as='div' 
          borderRadius={10}
          display={"flex"}
          justifyContent='center' 
          alignItems='center'
          height={'50%'}
          flexDir={'column'} 
          width='50%'
          > 
          <Image 
            src={profPick} 
            alt="hero"
            layout="fixed"
            borderRadius='3px'
            />
          <Heading 
            as='h1'  
            variant='h1-heading'>
            Edmond Avetisyan
          </Heading>
            <Text variant={'paragraph'}>React Native developer</Text>
          
        </Box>
          <Box 
          borderWidth='3px' 
          display={'flex'}
          borderRadius={10}
          justifyContent='center'
          alignItems={ 'center'}
          as='div' 
          height={'40%'}
          width={'40%'}
        >
             <Text
          textAlign='center'
          lineHeight={2}
          variant='paragraph'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Cum sociis natoque penatibus et magnis dis parturient montes. Sem fringilla ut morbi tincidunt augue interdum. 
            Neque convallis a cras semper auctor. Sodales neque sodales ut etiam sit amet nisl purus.
          </Text> 
        </Box>
      </Container>
    );
  }
}

export default WelcomeBlock;
