import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Post = React.createClass({
  render() {

    var {id, title} = this.props;

    return (
      <div>
        <p>The full post...</p>
      </div>
    )
  }
});

export default Redux.connect()(Post);
