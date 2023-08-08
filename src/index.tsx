import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { setupStore } from "./redux";
import { Provider } from "react-redux";

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
