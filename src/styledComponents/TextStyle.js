
import { mode } from "@chakra-ui/theme-tools";

export const TextStyle = {
  variants: {
    "paragraph": (props) => ({
      color: mode('textDark','textLight')(props),
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
};
