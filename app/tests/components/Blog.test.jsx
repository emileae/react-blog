var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');

import PostList from 'PostList';
import {Blog} from 'Blog';

describe ('Blog', () => {

  it('should exist', () => {
    expect(Blog).toExist();
  });

  it('should render PostList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Blog/>
      </Provider>
    );
    var blog = TestUtils.scryRenderedComponentsWithType(provider, Blog)[0];
    var postList = TestUtils.scryRenderedComponentsWithType(blog, PostList);
    expect(postList.length).toEqual(1);
  });

});
