// @flow

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

declare const module: NodeModule & {
  hot?: {
    accept(...args: any[]): any;
  };
};

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(a: any): void;
};

export const history = createBrowserHistory();

const loggerMiddleware = () => (next: any) => (action: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('STORE', action);
  }

  return next(action);
};

const createRootReducer = () => {
  return combineReducers({
    ...require('modules/index').default,
    router: connectRouter(history),
  });
};

const middleware = applyMiddleware(loggerMiddleware, routerMiddleware(history));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(createRootReducer(), {}, composeEnhancers(
  middleware
) as any);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('modules', () => {
    store.replaceReducer(createRootReducer());
  });
}
