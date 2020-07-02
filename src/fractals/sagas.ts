import { call, put, takeEvery } from "redux-saga/effects";

import { fractalSlice } from "./store";
import { startResetSettings } from "./actions";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* resetSettingsSaga() {
  yield call(delay, 2000);
  yield put({ type: fractalSlice.actions.resetSettings.type });
}

export function* watchResetSettings() {
  yield takeEvery(startResetSettings, resetSettingsSaga);
}
