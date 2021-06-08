import { call, put, takeEvery } from "redux-saga/effects";
import { actions } from "../Actions";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementby2Sec() {
  yield call(delay, 2000);
  yield put({ type: actions.increment });
}

export default function* rootSaga() {
  yield takeEvery(actions.incrementby2sec, incrementby2Sec);
}
