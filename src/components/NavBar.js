import React from "react";
import { Box, Container, Link } from "@chakra-ui/react";

const NavBar = ({containerStyle}) => {
  return (
    <Box
      style={containerStyle}
         >
      <Link variant="nav-link" href="/About">
        About
      </Link>
      <Link variant="nav-link" href="/Works">
        Works
      </Link>
      <Link variant="nav-link" href="/Blog">
        Blog
      </Link>
      <Link variant="nav-link" href="/Contacts">
        Contacts
      </Link>
    </Box>
  );
};

export default NavBar;
