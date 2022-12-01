import React from "react";
import {
  Box,
  Button,
  chakra,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";
import { Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MyChakraAnimatedBox = chakra(motion.div, {});

export const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MyChakraAnimatedBox
      key={useColorModeValue("light", "dark")}
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 20, opacity: 0 }}
      exit={{ x: -20, opacity: 1 }}
      transitionDuration="0.5s"
      whileHover={{ scale: 1.1 }}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      {" "}
      <Button onClick={toggleColorMode} variant={"theme-button"}>
        <Icon
          as={colorMode === "light" ? MdOutlineWbSunny : MdOutlineNightlight}
        />
      </Button>
    </MyChakraAnimatedBox>
  );
};
