import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Blog from 'Blog';
import Post from 'Post';
import PostForm from 'PostForm';
// import PostForm from 'PostForm';
// import PostList from 'PostList';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  console.log('require login');
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  console.log('redirect if logged in');
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};



export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Blog}></IndexRoute>
      <Route path="/post/:postId" component={Post}></Route>
      <Route path="/admin" component={PostForm}></Route>
    </Route>
  </Router>
);
