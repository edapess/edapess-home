import { mode } from "@chakra-ui/theme-tools";

export const LinkStyle = {
  variants: {
    "nav-link": (props) => ({
      color: mode("textDark", "textLight")(props),
      fontSie: "14px",
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
};
