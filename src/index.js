import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux";
import store from './Store'

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


