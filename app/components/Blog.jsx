import React from 'react';
import * as Redux from 'react-redux';

//var TodoList = require('TodoList');
import PostForm from 'PostForm';
import PostList from 'PostList';
import * as actions from 'actions';


export var Blog = React.createClass({
  render() {

    return (
      <div>

        <h1 className="page-title">Le Blog</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <PostList/>
            </div>
          </div>
        </div>


      </div>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(Blog);
