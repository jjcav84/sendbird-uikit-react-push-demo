import "firebase/messaging";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { registerServiceWorker } from './serviceWorker';

registerServiceWorker();

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);