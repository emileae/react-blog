import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Blog from 'Blog';
import Post from 'Post';
import PostForm from 'PostForm';
import Login from 'Login';
// import PostForm from 'PostForm';
// import PostList from 'PostList';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    replace('/login');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  console.log('redirect if logged in');
  if(firebase.auth().currentUser){
    replace('/admin');
  }
  next();
};



export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Blog}></IndexRoute>
      <Route path="/post/:postId" component={Post}></Route>
      <Route path="/admin" component={PostForm} onEnter={requireLogin}></Route>
      <Route path="/login" component={Login} onEnter={redirectIfLoggedIn}></Route>
    </Route>
  </Router>
);
