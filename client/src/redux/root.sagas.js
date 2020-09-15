import { all, call } from "redux-saga/effects";

import { userSagas } from "./users/user.sagas";

export default function* rootSagas() {
  yield all([call(userSagas)]);
}
