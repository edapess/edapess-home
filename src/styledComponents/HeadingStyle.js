import {mode} from '@chakra-ui/theme-tools'

export  const HeadingStyle = {
  variants: {
    'h1-heading':(props) => ({
      color: mode('textDark','textLight')(props),
  }),
  }
}
