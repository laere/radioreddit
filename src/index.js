import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//  STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// CONTAINERS
import App from './app/app';
//  STATE

// Store with middleware.
const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// Store with middleware and reducers
const State = combineReducers({
  routing: routerReducer
});
const store = createStoreWithMiddleware(State);
// Sync history with store
const history = syncHistoryWithStore(browserHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="channels" component={Channels} />
        <Route path="library" component={Library} />
        <Route path="hot" component={Hot} />
        <Route path="upload" component={Upload} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#container'));
