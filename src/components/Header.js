
import React from "react";
import { Box } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { ThemeButton } from "./ThemeButton";



const Header = () => {
  return (
    <Box
      as='div'
      display={"flex"}
      minWidth="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      padding='0px 20px'
      alignItems={"center"}
    >
      <Box
      display={'flex'}
      alignItems='center'
      >
      <Logo/>
      <ThemeButton />
      </Box>
      <NavBar containerStyle={ 
      {display:"flex",
      width:"30%",
      justifyContent:"space-between",
      m:"0",
      paddingRight:'0px'}
}
        />
    </Box>
  );
};

export default Header;
