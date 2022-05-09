import { getDocumentTheme, NextUIProvider } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Theme } from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme />
  </React.StrictMode>,
  document.getElementById('root')
);
