import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ThemeButton from "./themeButton";
const Header = () => {
  return (
    <Box
      as="div"
      display={"flex"}
      width="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <ThemeButton />
      <NavBar />
    </Box>
  );
};

export default Header;
