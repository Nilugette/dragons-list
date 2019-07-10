import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

import dragonReducer from "./reducer/dragonReducer";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";

// Exemple pour tester le reducer :

// const actions = [
//   { type: "ADD_DRAGON", payload: { dragon: "Test 1" } },
//   { type: "ADD_DRAGON", payload: { dragon: "Test 2" } },
//   { type: "REVERSE_DRAGON" },
//   { type: "ADD_DRAGON", payload: { dragon: "Test 3" } },
//   { type: "REMOVE_DRAGON", payload: { index: 1 } }
// ];

// const lastState = actions.reduce(dragonReducer, { dragons: [], count: 0 });

// console.log(lastState);

// Reducer
const store = createStore(dragonReducer);
const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById("root"));

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
