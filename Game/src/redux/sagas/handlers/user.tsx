import { call, put } from "redux-saga/effects";
import {
  getUsersFailed,
  getUsersSuccess,
  postUserFailed,
  postUserSuccess,
} from "../../ducks/user";
import { RequestGetUser, RequestPostUser } from "./../requests/user";

export function* handlePostUser(action: any): any {
  try {
    const response = yield call(RequestPostUser, action.payload);
    yield put(postUserSuccess({ ...action.payload, ...response }));
  } catch (err) {
    yield put(postUserFailed(err.message));
    console.log(err);
  }
}

export function* handleGetUser(): any {
  try {
    const response = yield call(RequestGetUser);
    const { data }: any = response;
    yield put(getUsersSuccess(data));
  } catch (err) {
    yield put(getUsersFailed(err.message));
    console.log(err);
  }
}
