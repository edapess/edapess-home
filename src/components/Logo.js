import React, { useState } from "react";
import { chakra, Link, useColorMode } from "@chakra-ui/react"
import Image from 'next/image'
import logo from '../assets/icons/logo.png'
import { motion } from "framer-motion";

const ChakraAnimatedLogoBox = chakra(motion.div,{})

const Logo = () => {
  const {colorMode} = useColorMode()
  return (
    <ChakraAnimatedLogoBox
    whileHover={{scale: 1.1}}
    display='flex'
    alignItems={'center'}
    bg={colorMode === 'light'? 'backgroundDark' : ''}
    borderEndEndRadius = '20px'
    >
  <Link href='/'>
      <Image
        alt='logo'
        src={logo}
        width='50px'
        height='50px'
        />
    </Link>
    </ChakraAnimatedLogoBox>
  )
}

export default Logo;
