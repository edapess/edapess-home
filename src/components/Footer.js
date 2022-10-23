import { Box, Container, Text } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <Box 
      as="div"
      display={"flex"}
      minWidth="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      padding='0px 20px'
      alignItems={"center"}
    >
      <NavBar
      containerStyle={ 
      {
      display:"flex",
      width:"30%",
      justifyContent:"space-between",
      m:"0",
      paddingRight:'0px'}
      }
        />
    </Box>
  );
};

export default Footer;
