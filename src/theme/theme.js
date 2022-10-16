import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import { ButtonStyle as Button } from "../styledComponents/ButtonStyle";
import { ContainerStyle as Container } from "../styledComponents/ContanerStyle";
import { LinkStyle as Link } from "../styledComponents/LinkStyle";
const theme = extendTheme({
  colors,
  components: { Button, Container, Link },
});

export default theme;
