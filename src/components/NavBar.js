import { Container, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Container
      display={"flex"}
      width="30%"
      justifyContent={"space-between"}
      m="0"
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
