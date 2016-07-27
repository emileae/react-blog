import React from 'react';
var {connect} = require('react-redux');
import * as Redux from 'react-redux';

import * as actions from 'actions';

import PostItem from 'PostItem';

export var PostList = React.createClass({
  render() {

    var {posts} = this.props;

    console.log('posts', posts);

    var renderPosts = () => {
      return posts.map((post) => {
        return (
          <PostItem key={post.id} {...post}/>
        );
      })
    };

    return (
      <div>
        {renderPosts()}
      </div>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(PostList);
