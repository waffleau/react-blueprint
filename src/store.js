// @flow

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

declare var module;

export const history = createBrowserHistory();

const loggerMiddleware = () => next => action => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('STORE', action);
  }

  return next(action);
};

const createRootReducer = () => {
  return connectRouter(history)(
    combineReducers(require('modules/index').default)
  );
};

const middleware = applyMiddleware(loggerMiddleware, routerMiddleware(history));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  createRootReducer(),
  {},
  composeEnhancers(middleware)
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('modules', () => {
    store.replaceReducer(createRootReducer());
  });
}
