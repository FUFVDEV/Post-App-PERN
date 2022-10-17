import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {
      id: null,
      name: "",
      description: "",
    },
    filter: {},
    isEditMode: false,
    isLoading: false,
  },
  reducers: {
    startPostOperation: state => ({ ...state, isLoading: true }),
    setPosts: (state, action) => ({ ...state, posts: action.payload, isLoading: false }),
    setPost: (state, action) => ({ ...state, post: { ...action.payload } }),
    setHandleChange: (state, action) => ({
      ...state,
      post: { ...state.post, [action.payload.name]: action.payload.value },
    }),
    setHandleFilter: (state, action) => ({
      ...state,
      filter: { ...state.filter, [action.payload.name]: action.payload.value },
    }),
    setEditMode: (state, action) => ({ ...state, isEditMode: action.payload }),
    resetFilter: (state, _) => ({ ...state, filter: {} }),
    addPost: (state, action) => ({
      ...state,
      posts: [action.payload, ...state.posts],
      isLoading: false,
    }),
    editUser: (state, action) => ({
      ...state,
      posts: state.posts.map(post => (post.id !== action.payload.id ? post : action.payload)),
      isLoading: false,
    }),
    deletePost: (state, action) => ({
      ...state,
      posts: state.posts.filter(post => post.id !== action.payload.id),
      isLoading: false,
    }),
    clearPostState: state => ({
      ...state,
      post: { id: null, name: "", description: "" },
      isEditMode: false,
    }),
    failedPostOperation: state => ({ ...state, isLoading: false }),
  },
});

export const {
  startPostOperation,
  setPosts,
  setPost,
  setHandleChange,
  setHandleFilter,
  setEditMode,
  resetFilter,
  addPost,
  editUser,
  deletePost,
  clearPostState,
  failedPostOperation,
} = postSlice.actions;

export default postSlice.reducer;
