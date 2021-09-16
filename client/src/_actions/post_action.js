import {
  ADD_POST
} from "../_actions/type";

export const addPost = (posts) => {
  return {
    type: ADD_POST,
    payload: posts
  };
};