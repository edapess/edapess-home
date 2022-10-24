
import { mode } from "@chakra-ui/theme-tools";

export const BoxStyle = {
  variants: {
    "footer": (props) => ({
      bg: mode('backgroundOnDark','backgroundOnLight')(props),
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
};
