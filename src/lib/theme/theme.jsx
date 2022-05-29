import { createTheme, NextUIProvider } from '@nextui-org/react';
import App from '../../App';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      colorButton: 'red',
      primary: 'blue',
      darkBlue: '#1A5D75',
      yellow: '#FFCB77',
      snow: '#FEF9EF',
      error: '#FE6D73',
      gradient:
        'radial-gradient(circle, rgba(244,137,141,1) 0%, rgba(66,139,166,1) 100%)',
    },
    space: {},
    fonts: {},
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#222831',
      colorButton: '#ECFDF4',
      primary: 'bluemarine',
      darkBlue: '#1A5D75',
      yellow: '#FFCB77',
      snow: '#FEF9EF',
      error: '#FE6D73',
      gradient:
        'radial-gradient(circle, rgba(244,137,141,1) 0%, rgba(66,139,166,1) 100%)',
    },
    space: {},
    fonts: {},
  },
});

export function pickTextColorBasedOnBgColor(bgColor) {
  var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000' : '#fff';
}

export const Theme = () => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Toaster position="top-center" reverseOrder={false} gutter="3" />
        <App />
      </NextUIProvider>
    </NextThemesProvider>
  );
};
