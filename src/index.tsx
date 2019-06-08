import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import * as serviceWorker from './serviceWorker';
import App from "./views/App";
import {axiosConfig} from './config'

// initial setup
axiosConfig();

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
