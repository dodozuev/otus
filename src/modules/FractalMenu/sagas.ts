import { call, put, takeEvery } from "redux-saga/effects";

import { delay } from "Utils/delay";
import { fractalSlice } from "./slice";
import { startResetSettings } from "./actions";

export function* resetSettingsSaga() {
  yield call(delay, 2000);
  yield put({ type: fractalSlice.actions.resetSettings.type });
}

export function* watchResetSettings() {
  yield takeEvery(startResetSettings, resetSettingsSaga);
}
