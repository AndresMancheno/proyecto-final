// 1. Import `createTheme`
import {
  createTheme,
  getDocumentTheme,
  NextUIProvider,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import App from '../App';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
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
        <App />
      </NextUIProvider>
    </NextThemesProvider>
  );
};
