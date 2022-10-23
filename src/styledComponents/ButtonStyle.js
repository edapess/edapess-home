import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyle = {
  variants: {
    "theme-button": (props) => ({
      bg: mode("orange", "buttonsDark")(props),
      width: "40px",
      height: "40px",
      color: "textDark",
      fontSize: "20px"
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
};
