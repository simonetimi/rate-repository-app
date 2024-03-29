import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#09a6ba',
    secondary: 'darkslateblue',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.OS === 'android' ? 'Roboto' : 'Arial',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
