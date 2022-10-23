import React from "react";
import { Container, Link } from "@chakra-ui/react";

const NavBar = ({containerStyle}) => {
  return (
    <Container
      display={containerStyle.display}
      justifyContent={containerStyle.justifyContent}
      m={containerStyle.m}
      paddingRight={containerStyle.paddingRight}
      width={containerStyle.width}
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
    </Container>
  );
};

export default NavBar;
