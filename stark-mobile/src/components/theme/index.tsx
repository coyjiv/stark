import { extendTheme } from 'native-base';
export const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
          backgroundColor: 'green.100',
        },
        defaultProps: {
          colorScheme: 'red',
        },
      },
      Heading: {
        // Can pass also function, giving you access theming tools
        baseStyle: ({ colorMode }:any) => {
          return {
            color: colorMode === 'dark' ? 'red.300' : 'blue.300',
            fontWeight: 'normal',
          };
        },
      },
    },
  });