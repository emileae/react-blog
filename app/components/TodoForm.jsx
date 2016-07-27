var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.todo.value;

    if ( todo.length > 0 ){
      this.refs.todo.value = '';
      dispatch(actions.startAddTodo(todo));
    }else{
      this.refs.todo.focus();
    };

  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input ref="todo" type="text" placeholder="What do you want to do?"></input>
          <button type="submit" className="button expanded">Add</button>
        </form>
      </div>
    )
  }
});

export default connect()(TodoForm);// connect connects the store to the component so we cna call dispatch as a prop
