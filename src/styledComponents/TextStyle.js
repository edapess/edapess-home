import { mode } from "@chakra-ui/theme-tools";

export const TextStyle = {
  variants: {
    paragraph: (props) => ({
      color: mode("textDark", "textLight")(props),
    }),
    aboutParagraph: (props) => ({
      color: mode("textLight", "textDark")(props),
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
};
