import { resetSettingsSaga, watchResetSettings } from "./sagas";

import { startResetSettings } from "./actions";
import { takeEvery } from "redux-saga/effects";

describe("watchResetSettings", () => {
  it("should dispatch resetSettingsSaga", () => {
    const gen = watchResetSettings();

    const actual = gen.next();
    const expected = takeEvery(startResetSettings, resetSettingsSaga);
    expect(actual.value).toEqual(expected);
  });
});
