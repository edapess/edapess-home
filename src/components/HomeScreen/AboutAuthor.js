import React from "react";
import { Heading, Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import profPic from '../../assets/edapeBack.png'
import dictionary from '../../data/dictionary.json'
const AboutAuthor = () => {
    const {colorMode} =useColorMode()
    console.log(colorMode);
    return(
        <Box 
        as='div' 
        borderRadius={10}
        display={"flex"}
        justifyContent='center' 
        alignItems='center'
        flexDir={'column'} 
        rowGap={'20px'}
        padding='60px'
> 
        <Box
        borderWidth='3px'
        display={'flex'}
        justifyContent='center'
        alignItems={'center'}
        borderRadius={20}
        overflow='hidden'
        borderColor={colorMode === 'dark' ? 'error' : 'orangeDark'}
        >
        <Image
          src={profPic} 
          alt="hero"
          layout="intrinsic"
          />
          </Box>
        <Heading
          as='h1'  
          variant='h1-heading'>
          {dictionary.homepage.author}
        </Heading>
          <Text variant={'paragraph'}>{dictionary.homepage.currentPosition}</Text>
        
      </Box>
    )
}


export default AboutAuthor;