import 'babel-polyfill';

import 'styles/global/reset.css';
import 'styles/global/scaffold.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history, store } from 'store';

import App from 'app';

const RootContainer = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<RootContainer />, document.getElementById('root'));
