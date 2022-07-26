import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import todoStore from './stores/TodoStore.js';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider todo={todoStore}>
      <App />
    </Provider>
);