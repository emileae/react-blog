import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var PostForm = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    console.log("should submit blog post");
    var {dispatch} = this.props;
    var title = this.refs.title.value;
    var text = this.refs.text.value;

    if ( title.length > 0 && text.length > 0 ){
      this.refs.title.value = '';
      this.refs.text.value = '';
      dispatch(actions.startAddPost(title, text));
    }else{
      this.refs.todo.focus();
    };
  },
  render() {
    return (
      <div>
        <p>Post</p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="small-10 medium-6 column">
                <label>
                  Title
                  <input ref="title" type="text"/>
                </label>
              </div>
              <div className="small-12 column">
                <label>
                  Write something...
                  <textarea ref="text" placeholder="None"></textarea>
                </label>
              </div>
            </div>
            <button type="submit" className="button expanded">Save</button>
          </form>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(PostForm);
