import { all } from "redux-saga/effects";

import postWatcher from "./postSaga";

export default function* rootSagas() {
  yield all([postWatcher()]);
}
