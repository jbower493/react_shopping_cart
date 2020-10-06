import { FETCH_POSTS, NEW_POST } from './types';

const posts = [
  {
    name: 'Post 1',
    body: 'The body of the first post'
  },
  {
    name: 'Post 2',
    body: 'The body of the second post'
  },
  {
    name: 'Post 3',
    body: 'The body of the third post'
  }
];

const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
};

export const handleFetchPosts = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(fetchPosts(posts));
    }, 2500)
  }
};

const addPost = (post) => {
  return {
    type: NEW_POST,
    payload: post
  };
};

export const handleAddPost = (post) => {
  return dispatch => {
    dispatch(addPost(post))
  }
};