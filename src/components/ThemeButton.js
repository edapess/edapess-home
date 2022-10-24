import React from "react";
import { Box, Button, chakra, useColorMode } from "@chakra-ui/react";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";
import { Icon } from "@chakra-ui/react";
import {motion} from 'framer-motion'

const MyChakraAnimatedBox = chakra(motion.div,{})

const variants = {
  toggled: { rotate: '180deg', }
}

export const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MyChakraAnimatedBox 
    animate = {colorMode === 'light' ? 'toggled' : ''}
    variants={variants}
    transitionDuration='0.15s'
    whileHover={{scale: 1.1}}
    display='flex'
    justifyContent={'center'}
    alignItems='center'
    >    <Button  onClick={toggleColorMode} variant={"theme-button"}>
      <Icon
        as={colorMode === "light" ? MdOutlineWbSunny : MdOutlineNightlight}
      />
    </Button>
</MyChakraAnimatedBox>

  );
};

