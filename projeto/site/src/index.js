import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const createStoreWithMidleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStoreWithMidleware(reducers)}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root')
);