import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import { ButtonStyle as Button } from "../styledComponents/ButtonStyle";
import { ContainerStyle as Container } from "../styledComponents/ContanerStyle";
import { LinkStyle as Link } from "../styledComponents/LinkStyle";
import {HeadingStyle as Heading} from '../styledComponents/HeadingStyle';
import {TextStyle as Text} from '../styledComponents/TextStyle';
const theme = extendTheme({
  colors,
  components: { 
    Button, 
    Container, 
    Link, 
    Heading,
    Text
  },
});

export default theme;
