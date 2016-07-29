import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe("Actions", () => {

  it('should generate add post action', () => {
    var action = {
      type: "ADD_POST",
      post: {
          id: 'abc123',
          title: 'Some title',
          text: 'Some text',
          publish: false,
          createdAt: 1345
      }
    };
    var res = actions.addPost(action.post);

    expect(res).toEqual(action);
  });

  describe('Firebase test DB', () => {

    var testPostRef;
    var uid;
    var postsRef;

    //beforeEach, afterEach  this is a mocha function code to run before each test
    beforeEach((done) => {

      postsRef = firebaseRef.child(`posts`);

      // remove all existing and then add a post in the callback
      postsRef.remove().then(() => {
        // create a post
        testPostRef = firebaseRef.child('posts').push();

        return testPostRef.set({
          title: 'Some Test title',
          text: 'Some Test text',
          publish: false,
          createdAt: 1345
        });

      })
      .then(() => {done()})
      .catch(done);
    });

    afterEach((done) => {
      postsRef.remove().then(() => done());// clean up dummy data afterwards
    });

    it('should create post and dispatch ADD_POST', (done) => {

        const store = createMockStore({});
        const title = 'Some TEST title';
        const text = 'Some TEST text';

        store.dispatch(actions.startAddPost(title, text)).then(() => {
          const actions = store.getActions();
          expect(actions[0]).toInclude({
            type: 'ADD_POST'
          });
          expect(actions[0].post).toInclude({
            text: text,
            title: title
          });
          done();// need to call done because Karma waits until done() is called
        }).catch(done);// catch handles the erroro case

      });

      it('should populate postItems and dispatch ADD_POSTS', (done) => {
      const store = createMockStore({});
      const action = actions.startAddPosts();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();// returns an array of actions that have been dispatched for this mock store
        expect(mockActions[0].type).toEqual('ADD_POSTS');
        expect(mockActions[0].posts.length).toEqual(1);
        expect(mockActions[0].posts[0].text).toEqual('Some Test text');

        done();
      }, done);

    });

  });

  // it('should generate addPosts action', () => {
  //   var posts = [
  //     {
  //       id: 'abc',
  //       title: 'Blog Title A'
  //     },
  //     {
  //       id: 'def',
  //       title: 'Blog Title D'
  //     }
  //   ];
  //
  //   var action = {
  //     type: "ADD_POSTS",
  //     posts
  //   };
  //
  //   var res = actions.addPosts();
  //
  //   expect(res).toEqual(action);
  //
  // });

  // it('should generate search text action', () => {
  //   var action = {
  //     type: "SET_SEARCH_TEXT",
  //     searchText: "some search text"
  //   };
  //   var res = actions.setSearchText(action.searchText);
  //
  //   expect(res).toEqual(action);
  // });
  //
  // it('should generate add todo action', () => {
  //   var action = {
  //     type: "ADD_TODO",
  //     todo: {
  //         id: 'abc123',
  //         text: 'Anything we like',
  //         completed: false,
  //         createdAt: 1345
  //     }
  //   };
  //   var res = actions.addTodo(action.todo);
  //
  //   expect(res).toEqual(action);
  // });
  //
  // it('should generate add todos action object', () => {
  //   var todos = [
  //     {
  //       id: '111',
  //       text: 'anything',
  //       completed: false,
  //       completedAt: undefined,
  //       createdAt: 33000
  //     }
  //   ]
  //   var action = {
  //     type: 'ADD_TODOS',
  //     todos
  //   };
  //   var res = actions.addTodos(todos);
  //
  //   expect(res).toEqual(action);
  // })
  //
  // it('should generate toggle showCompleted action', () => {
  //   var action = {
  //     type: "TOGGLE_SHOW_COMPLETED"
  //   };
  //   var res = actions.toggleShowCompleted();
  //   expect(res).toEqual(action);
  // });
  //
  // it('should generate update todo action', () => {
  //   var action = {
  //     type: "UPDATE_TODO",
  //     id: 1,
  //     updates: {completed: false}
  //   };
  //   var res = actions.updateTodo(action.id, action.updates);
  //   expect(res).toEqual(action);
  // });
  //
  // describe('Tests with firebase todos', () => {
  //   var testTodoRef;
  //   var uid;
  //   var todosRef;
  //   //beforeEach, afterEach  this is a mocha function code to run before each test
  //   beforeEach((done) => {
  //     var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);
  //
  //     firebase.auth().signInWithCredential(credential).then((user) => {
  //       uid = user.uid;
  //       todosRef = firebaseRef.child(`users/${uid}/todos`);
  //
  //       return todosRef.remove();
  //     }).then(() => {
  //       testTodoRef = todosRef.push();
  //       return testTodoRef.set({
  //         text: 'Something to do',
  //         completed: false,
  //         createdAt: 123456
  //       })
  //     })
  //     .then(() => done())
  //     .catch(done);
  //
  //   });
  //   afterEach((done) => {
  //     todosRef.remove().then(() => done());// clean up dummy data afterwards
  //   });
  //
  //   it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
  //     const store = createMockStore({auth: {uid}});
  //     const action = actions.startToggleTodo(testTodoRef.key, true);
  //
  //     store.dispatch(action).then(() => {
  //       const mockActions = store.getActions();
  //
  //       expect(mockActions[0]).toInclude({
  //         type: 'UPDATE_TODO',
  //         id: testTodoRef.key,
  //       });
  //       expect(mockActions[0].updates).toInclude({
  //         completed: true
  //       });
  //       expect(mockActions[0].updates.completedAt).toExist();
  //
  //       done();
  //     }, done);
  //   });
  //
  //   it('should populate todos and dispatch ADD_TODOS', (done) => {
  //     const store = createMockStore({auth: {uid}});
  //     const action = actions.startAddTodos();
  //
  //     store.dispatch(action).then(() => {
  //       const mockActions = store.getActions();// returns an array of actions that have been dispatched for this mock store
  //       expect(mockActions[0].type).toEqual('ADD_TODOS');
  //       expect(mockActions[0].todos.length).toEqual(1);
  //       expect(mockActions[0].todos[0].text).toEqual('Something to do');
  //
  //       done();
  //     }, done);
  //
  //   });
  //
  //   it('should create todo and dispatch ADD_TODO', (done) => {
  //     const store = createMockStore({auth: {uid}});
  //     const todoText = 'My todo item';
  //
  //     store.dispatch(actions.startAddTodo(todoText)).then(() => {
  //       const actions = store.getActions();
  //       expect(actions[0]).toInclude({
  //         type: 'ADD_TODO'
  //       });
  //       expect(actions[0].todo).toInclude({
  //         text: todoText
  //       });
  //       done();// need to call done because Karma waits until done() is called
  //     }).catch(done);// catch handles the erroro case
  //   });
  //
  // });
  //
  // describe('Auth tests', () => {
  //   it('should generate a LOGIN action', () => {
  //     const action = {
  //       type: "LOGIN",
  //       uid: '123456qwerty'
  //     };
  //     const res = actions.login(action.uid);
  //     expect(res).toEqual(action);
  //   });
  //   it('should generate a LOGOUT action', () => {
  //     const action = {
  //       type: "LOGOUT"
  //     };
  //     const res = actions.logout();
  //     expect(res).toEqual(action);
  //   });
  // });


});
