import { Button, useColorMode } from "@chakra-ui/react";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";
import { Icon } from "@chakra-ui/react";
const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} variant={"theme-button"}>
      <Icon
        as={colorMode === "light" ? MdOutlineWbSunny : MdOutlineNightlight}
      />
    </Button>
  );
};

export default ThemeButton;
