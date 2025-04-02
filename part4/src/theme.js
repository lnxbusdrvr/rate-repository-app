import { Platform } from 'react-native';

const theme = {
  colors: {
    primary: '#0366d6',
    background: 'white',
    textPrimary: 'black',
    textSecondary: 'gray',
    textOnPrimary: 'white',
    error: 'red',
    appBarBackground: 'black'
  },
  fontSizes: {
    body: 16,
    subheading: 18
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  spacing: {
    small: 10,
    medium: 15,
    large: 20
  },
  borderRadius: {
    small: 5,
    medium: 10
  }
};

export default theme;

