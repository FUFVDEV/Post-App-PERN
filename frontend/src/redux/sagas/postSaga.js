import { call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";

import { generateEndpoint, httpAction } from "api/apiUtils";
import { CREATE_POST, DELETE_POST, GET_POSTS, UPDATE_POST } from "redux/actionTypes";
import {
  addPost,
  clearPostState,
  deletePost,
  editUser,
  failedPostOperation,
  setPosts,
  startPostOperation,
} from "redux/slices/postSlice";
// import ErrorList from "antd/lib/form/ErrorList";

const BAD_REQUEST_CODE = 400;
const INTERNAL_SERVER_ERROR_CODE = 500;

const showError = ({ error, key = "messageKey" }) => {
  message.error({
    content: error?.message || error,
    key: `messageKey_${key}` || key,
    duration: 3,
  });
};

function* getPostsSaga({ queryParams }) {
  try {
    yield put(startPostOperation());

    const response = yield call(httpAction, generateEndpoint("posts", { searchs: queryParams }));
    const data = yield call([response, "json"]);

    if (response.status === INTERNAL_SERVER_ERROR_CODE) {
      showError(data);
      yield put(failedPostOperation());
      return;
    }

    yield put(setPosts(data));
  } catch (error) {
    yield put(failedPostOperation());
    message.error({
      content: "Ocurrió un error al intentar obtener la lista de post.",
      key: "messageKey",
      duration: 2,
    });
  }
}

function* createPostSaga({ payload }) {
  try {
    yield put(startPostOperation());

    const response = yield call(httpAction, generateEndpoint("posts"), "POST", payload);
    const data = yield call([response, "json"]);

    if (response.status === BAD_REQUEST_CODE) {
      yield put(failedPostOperation());

      data.errors.forEach((error, index) => showError({ error, key: index }));
      return;
    }

    if (response.status === INTERNAL_SERVER_ERROR_CODE) {
      yield put(failedPostOperation());
      showError({ error: data });
      return;
    }

    yield put(addPost(data));
    yield put(clearPostState());

    message.success({
      content: "Post creado exitosamente.",
      key: "messageKey",
      duration: 2,
    });
  } catch (error) {
    yield put(failedPostOperation());

    message.error({
      content: "Ocurrió un error al intentar crear el post.",
      key: "messageKey",
      duration: 2,
    });
  }
}

function* editPostSaga({ payload: post }) {
  try {
    yield put(startPostOperation());

    const response = yield call(
      httpAction,
      generateEndpoint("post", { params: { id: post.id } }),
      "PUT",
      post
    );

    const data = yield call([response, "json"]);

    if (response.status === BAD_REQUEST_CODE) {
      yield put(failedPostOperation());

      data.errors.forEach((error, index) => showError({ error, key: index }));
      return;
    }

    if (response.status === INTERNAL_SERVER_ERROR_CODE) {
      yield put(failedPostOperation());
      showError({ error: data });
      return;
    }

    yield put(editUser(data));
    yield put(clearPostState());

    message.success({
      content: "Post actualizado exitosamente.",
      key: "messageKey",
      duration: 2,
    });
  } catch (error) {
    yield put(failedPostOperation());

    message.error({
      content: "Ocurrió un error al intentar actualizar los datos del post.",
      key: "messageKey",
      duration: 2,
    });
  }
}

function* deletePostSaga({ payload: postId }) {
  try {
    yield put(startPostOperation());

    const response = yield call(
      httpAction,
      generateEndpoint("post", { params: { id: postId } }),
      "DELETE"
    );
    const data = yield call([response, "json"]);

    if (response.status === INTERNAL_SERVER_ERROR_CODE) {
      showError(data);
      yield put(failedPostOperation());
      return;
    }

    yield put(deletePost(data));

    message.success({
      content: "Post eliminado exitosamente.",
      key: "messageKey",
      duration: 2,
    });
  } catch (error) {
    yield put(failedPostOperation());

    message.error({
      content: "Ocurrió un error al intentar eliminar el post.",
      key: "messageKey",
      duration: 2,
    });
  }
}

// Watchers
export default function* postWatcher() {
  yield takeLatest(GET_POSTS, getPostsSaga);
  yield takeLatest(CREATE_POST, createPostSaga);
  yield takeLatest(UPDATE_POST, editPostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
}
