var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Post} from 'Post';

describe('Post', () => {

  it('should exist', () => {
    expect(Post).toExist();
  });

})
