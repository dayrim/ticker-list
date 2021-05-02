import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'features';
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import configureStore from "store";
import { BrowserRouter } from "react-router-dom";
import WebFont from "webfontloader";

import { theme } from "./assets/theme";
import { defaultFonts } from "./assets/fonts";
import reportWebVitals from './reportWebVitals';

import 'assets/global.scss';

const bootstrap = async () => {
  const store = configureStore()

  WebFont.load({
    google: {
      families: defaultFonts,
    },
  });
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
};
bootstrap();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
