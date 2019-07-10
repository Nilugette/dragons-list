import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

import dragonReducer from "./reducer/dragonReducer";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";

// Reducer
const store = createStore(dragonReducer);
const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById("root"));

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
