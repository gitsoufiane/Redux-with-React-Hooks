import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import "./style.css";
import { Provider } from 'react-redux'
import { store } from './store';

ReactDOM.render(
    <Provider>
        <ExchangeRate store={store} />
    </Provider>,
    document.getElementById("root"));
