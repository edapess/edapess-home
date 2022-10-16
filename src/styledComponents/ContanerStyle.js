import { mode } from "@chakra-ui/theme-tools";

export const ContainerStyle = {
  variants: {
    outline: (props) => ({
      bg: mode("backgroundLight", "backgroundDark")(props),
      width: "50px",
      height: "40px",
      color: "textDark",
    }),
  },
};
