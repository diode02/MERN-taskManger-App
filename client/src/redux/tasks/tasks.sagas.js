import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  getTasksAPI,
  postTaskAPI,
  deleteTaskAPI,
} from "../../utils/tasks.utils";
import {
  fetchTasksSuccess,
  fetchTasksFailure,
  postTaskFailure,
  postTaskSuccess,
  deleteTaskSuccess,
  deleteTaskFailure,
} from "./tasks.actions";
import TasksActionTypes from "./tasks.types";

export function* fetchTasksStartAsync({ payload }) {
  try {
    const tasks = yield getTasksAPI(payload);

    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

export function* onFetchTasksStart() {
  yield takeLatest(TasksActionTypes.FETCH_TASKS_START, fetchTasksStartAsync);
}

export function* postTaskStartAsync({ payload }) {
  try {
    console.log(payload);
    const response = yield postTaskAPI(payload);
    yield put(postTaskSuccess(response.data));
  } catch (error) {
    yield put(postTaskFailure(error.message));
  }
}

export function* onPostTaskStart() {
  yield takeLatest(TasksActionTypes.POST_TASK_START, postTaskStartAsync);
}

export function* deleteTaskStartAsync({ payload }) {
  try {
    const response = yield deleteTaskAPI(payload);
    console.log(response);
    yield put(deleteTaskSuccess(response.data));
  } catch (error) {
    yield put(deleteTaskFailure(error.message));
  }
}

export function* onDeleteTaskStart() {
  yield takeLatest(TasksActionTypes.DELETE_TASK_START, deleteTaskStartAsync);
}

export function* tasksSagas() {
  yield all([call(onFetchTasksStart), call(onPostTaskStart)]);
}
