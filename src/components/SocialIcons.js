
import React from "react";
import Image from "next/image";
import telegram from "../assets/icons/telegram.png"
import github from '../assets/icons/github.png'
import linkdin from '../assets/icons/linkdin.png'
import { Box } from "@chakra-ui/react";
const SocialIcons =()=> {
  return (
  
  <Box as='div'>

        <Image
          src={telegram}
          alt='telegram'
          />

        <Image
          src={github}
          alt='github'
          />
        <Image
          src={linkdin}
          alt='linkdin'
          />
    </Box>
  )

}

export default SocialIcons;
