import React from 'react';
import * as Redux from 'react-redux';
import {Link} from 'react-router';

import * as actions from 'actions';

export var PostItem = React.createClass({
  render() {

    var {id, title} = this.props;
    var postLink = '/post/'+ id;

    var fullPost = (e) => {
      e.preventDefault();
      console.log('pid: ', id);
    }

    return (
      <div>
          <Link to={postLink} onClick={fullPost}>{title}</Link>
      </div>
    )
  }
});

export default Redux.connect()(PostItem);
