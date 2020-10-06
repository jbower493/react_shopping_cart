import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: []
};

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        items: action.payload
      }
    case NEW_POST:
      return {
        items: [...state.items, action.payload]
      }
    default:
      return state
  }
};

export default postReducer;