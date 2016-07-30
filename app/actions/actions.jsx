import moment from 'moment';

import firebase, {firebaseRef, facebookProvider} from 'app/firebase/';// if file is called index can leave off filename

export var addPosts = (posts) => {
  return {
    type: "ADD_POSTS",
    posts
  }
};

export var startAddPosts = () => {
  return (dispatch, getState) => {
    //var uid = getState().auth.uid;
    //var todosRef = firebaseRef.child(`users/${uid}/todos`);
    var postsRef = firebaseRef.child(`posts`);
    return postsRef.once('value').then((snapshot) => {
      var posts = snapshot.val() || {};
      var parsedPosts = [];

      Object.keys(posts).forEach((postId) => {
        parsedPosts.push({
          id: postId,
          ...posts[postId]
        });
      });

      dispatch(addPosts(parsedPosts));

    });
  };
};

export var setPost = (postId, postTitle) => {
  return {
    type: "SET_CURRENT_POST",
    postId,
    postTitle
  }
};

export var addPost = (post) => {
  return {
    type: "ADD_POST",
    post
  }
};

export var startAddPost = (title, text) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var post = {
      title,
      text,
      uid,
      publish: false,
      createdAt: moment().unix(),
    };

    var postRef = firebaseRef.child(`posts`).push(post);

    return postRef.then(() => {
      dispatch(addPost({
        ...post,
        id: postRef.key
      }));
    });

  };
};


export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};
export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(facebookProvider).then((result) => {
      console.log("Auth worked.......", result.user);
      var user = result.user;
      var uid = user.uid;
      var userObj = {
        admin: false,
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
      };
      console.log("userObj", userObj);
      var userRef = firebaseRef.child(`users/${uid}`).update(userObj);
    }, (error) => {
      console.log('unable to auth', error);
    });
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};
export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('logged out');
    });
  };
};
