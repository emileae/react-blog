var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import * as actions from 'actions';
var {TodoForm} = require('TodoForm');

describe('TodoForm', () => {
  it("should exist", () => {
    expect(TodoForm).toExist();
  });

  it("should dispatch ADD_TODO when valid todo text", () =>{
    var todoText = "some test todo";
    var action = actions.startAddTodo(todoText);
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should not dispatch ADD_TODO when invalid todo Text", () =>{
    var todoText = "";
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todo.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
