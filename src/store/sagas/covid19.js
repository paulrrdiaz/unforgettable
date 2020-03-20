import { takeLatest, call, fork, put } from "redux-saga/effects";
import { Types, getTotalSuccess } from "store/actions/covid19";
import * as API from "api/covid19";

function* getTotal() {
  try {
    const { data } = yield call(API.getTotal);
    yield put(getTotalSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

function* getTotalRequest() {
  yield takeLatest(Types.GET_TOTAL_REQUEST, getTotal);
}

export default [fork(getTotalRequest)];
