import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//  STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// CONTAINERS
import App from './app/app';
//  STATE
import rootReducer from './reducers/rootReducer';
// Store with middleware.
const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// Store with middleware and reducers

const store = createStoreWithMiddleware(rootReducer);
// Sync history with store
const history = syncHistoryWithStore(browserHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container'));
