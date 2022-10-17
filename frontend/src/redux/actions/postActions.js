import { CREATE_POST, DELETE_POST, GET_POSTS, UPDATE_POST } from "redux/actionTypes";

export const getPosts = queryParams => ({ type: GET_POSTS, queryParams });
export const createPost = payload => ({ type: CREATE_POST, payload });
export const editPost = payload => ({ type: UPDATE_POST, payload });
export const deletePost = payload => ({ type: DELETE_POST, payload });
