import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import { signUpFailure, signUpSucess } from "./user.actions";
import { createUserWithEmailAndPassword } from "../../utils/user.utils";

export function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    const user = yield createUserWithEmailAndPassword({
      email,
      password,
      name: displayName,
    });
    console.log(user);
    yield put(signUpSucess(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpSaga);
}

export function* userSagas() {
  yield all([call(onSignUpStart)]);
}
