import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

import * as actions from 'actions';

export var PostItem = React.createClass({
  render() {

    var {dispatch, id, title} = this.props;
    var postLink = '/post/'+ id;

    return (
      <div>
          <Link to={postLink} onClick={() => {
              dispatch(actions.setPost(id, title))
            }}>{title}</Link>
      </div>
    )
  }
});

export default Redux.connect(
  (state) => {
    return state.currentPost;
  }
)(PostItem);
