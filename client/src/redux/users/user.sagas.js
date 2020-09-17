import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  signUpFailure,
  signUpSucess,
  signOutSucess,
  signOutFailure,
  signInSuccess,
  signInFailure,
} from "./user.actions";
import {
  createUserWithEmailAndPassword,
  logOutAsync,
  signInWithEmailAndPassword,
} from "../../utils/user.utils";

export function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    const user = yield createUserWithEmailAndPassword({
      email,
      password,
      name: displayName,
    });
    yield put(signUpSucess(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signOut({ payload }) {
  try {
    yield logOutAsync(payload);
    yield put(signOutSucess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const user = yield signInWithEmailAndPassword({ email, password });
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpSaga);
}
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignOutStart),
    call(onEmailSignInStart),
  ]);
}
