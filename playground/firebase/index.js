import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyAFrH0m3WHF2Pym5i2Exk6pTr8dQMabhAg",
   authDomain: "emile-todo-app.firebaseapp.com",
   databaseURL: "https://emile-todo-app.firebaseio.com",
   storageBucket: "emile-todo-app.appspot.com",
 };
 firebase.initializeApp(config);

 var firebaseRef = firebase.database().ref();

 firebaseRef.set({
   app: {
     name: "Todo App",
     version: "0.0.1"
   },
   isRunning: true,
   user: {
     name: "Emile",
     age: 32
   }
 });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'First Todo'
});
todosRef.push({
  text: 'Second Todo'
});

//  var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
//  var newNoteRef = notesRef.push({
//    text: 'Walk the dog.'
//  });

 // console.log('Todo ID: ', newNoteRef.key);

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Changed User', snapshot.val());
// });
//
// firebaseRef.update({
//   'user/name': 'Emiru'
// });
//
// firebaseRef.child('app').update({
//   'name': 'new Todo App'
// });

// firebaseRef.on('value', logData);
//
// firebaseRef.off('value', logData);
//
// firebaseRef.update({
//   isRunning: false
// });

 // firebaseRef.child('app').once('value').then((snapshot) => {
 //   console.log('Got child DB', snapshot.key, snapshot.val());
 // }, (err) => {
 //   console.log('unable to fetch value', e);
 // });

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Applicationn'
// });

// firebaseRef.update({
//   'app/name': 'Emile\'s App',
//   'user/name': 'Emiru'
// });

// firebaseRef.child('app').update({
//   name: 'Emiru\'s App'
// });
// firebaseRef.child('user').update({
//   name: 'Emiru yo'
// });
