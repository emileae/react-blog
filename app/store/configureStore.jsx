//var redux = require('redux');
import * as redux from 'redux';

import {addPostsReducer, setCurrentPostReducer} from 'reducers';

import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    posts: addPostsReducer,
    currentPost: setCurrentPostReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
