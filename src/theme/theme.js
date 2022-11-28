import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import { ButtonStyle as Button } from "../styledComponents/ButtonStyle";
import { ContainerStyle as Container } from "../styledComponents/ContanerStyle";
import { LinkStyle as Link } from "../styledComponents/LinkStyle";
import { HeadingStyle as Heading } from "../styledComponents/HeadingStyle";
import { TextStyle as Text } from "../styledComponents/TextStyle";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  colors,
  components: {
    Button,
    Container,
    Link,
    Heading,
    Text,
  },
  breakpoints,
  fons: { heading: `'Open Sans', sans-serif`, body: `'Raleway', sans-serif` },
});

export default theme;
