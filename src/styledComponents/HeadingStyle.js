import { mode } from "@chakra-ui/theme-tools";

export const HeadingStyle = {
  variants: {
    "h1-heading": (props) => ({
      color: mode("textDark", "textLight")(props),
    }),
    "h3-heading": (props) => ({
      color: mode("textLight", "textDark")(props),
      fontSize: 24,
    }),
  },
};
