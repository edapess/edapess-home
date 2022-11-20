import { Box, Container, Text, useColorMode, Link } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Footer = () => {
  const {colorMode} = useColorMode()
  return (
    <Box 
      as="div"
      display={"flex"}
      minWidth="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      padding='0px 20px'
      alignItems={"center"}
      bg={colorMode === 'dark' ? 'backgroundOnDark' :'backgroundOnLight'}
    >
      <Logo/>
      <Box>
        <Link 
          href='mailto:edmondavetisyanw@gmail.com' 
          variant="nav-link">
          edmondavetisyanw@gmail.com
        </Link>
      </Box>
      <NavBar
      containerStyle={ 
      {
      display:"flex",
      justifyContent:"space-between",
      m:"0px",
      padding:'10px 0px 20px 0px',
      flexDirection: 'column'
    }
      }
        />
    </Box>
  );
};

export default Footer;
