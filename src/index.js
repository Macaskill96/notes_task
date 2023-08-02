import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {setupStore} from "./redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore()


root.render(
  <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>
);
