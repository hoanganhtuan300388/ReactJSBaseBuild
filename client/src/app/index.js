import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "./containers/App";
import store from "./store";
import "../app/assets/css/bootstrap.min.css";
import "../app/assets/css/heroic-features.css";
import "../app/assets/js/bootstrap.min.js";
import "../app/assets/js/bootstrap-datetimepicker-master/build/js/bootstrap-datetimepicker.min.js";
import "../app/assets/js/bootstrap-datetimepicker-master/build/css/bootstrap-datetimepicker.min.css";
import "../app/assets/js/bootstrap-select-master/dist/js/bootstrap-select.min.js";
import "../app/assets/js/bootstrap-select-master/dist/css/bootstrap-select.min.css";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);