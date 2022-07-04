import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import store from "./store/configureStore";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Helmet>
        <title>Free Stock Photos</title>
      </Helmet>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
