import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Post = React.createClass({
  render() {

    var {postId} = this.props.params;
    var {currentPost} = this.props;

    return (
      <div>
        <p>title: {currentPost.postTitle}... {currentPost.postId}</p>
      </div>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state;// return all properties on state
  }
)(Post);
