import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyle = {
  variants: {
    "theme-button": (props) => ({
      bg: mode("buttonsLight", "buttonsDark")(props),
      width: "50px",
      height: "40px",
      color: "textDark",
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
};
