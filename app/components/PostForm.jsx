import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var PostForm = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    console.log("should submit blog post");
    // var {dispatch} = this.props;
    // var todo = this.refs.todo.value;
    //
    // if ( todo.length > 0 ){
    //   this.refs.todo.value = '';
    //   dispatch(actions.startAddTodo(todo));
    // }else{
    //   this.refs.todo.focus();
    // };
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
                  <input type="text"/>
                </label>
              </div>
              <div className="small-12 column">
                <label>
                  Write something...
                  <textarea placeholder="None"></textarea>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(PostForm);
