import { call, fork, takeEvery } from "redux-saga/effects";
import { delay, resetSettingsSaga, watchResetSettings } from "./sagas";

import { startResetSettings } from "./actions";

describe("watchResetSettings", () => {
  it("should dispatch resetSettingsSaga", () => {
    const gen = watchResetSettings();

    const actual = gen.next();
    const expected = takeEvery(startResetSettings, resetSettingsSaga);
    expect(actual.value).toEqual(expected);
  });
});
