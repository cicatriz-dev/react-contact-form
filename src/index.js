import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import './index.css';
import appTheme from './utils/styles/theme';
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
