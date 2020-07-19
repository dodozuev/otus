import { FractalState, initialFractalState } from "modules/Login/slice";

import { FractalData } from "./FractalWindow";
import { createSlice } from "@reduxjs/toolkit";
import { startResetSettings } from "./actions";

export const fractalSlice = createSlice({
  name: "fractalSlice",
  initialState: initialFractalState,
  reducers: {
    resetSettings: (state: FractalState) => {
      state = initialFractalState;
      return state;
    },
    toggleAction: (state: FractalState) => {
      state.play = !state.play;
    },
    updateSettings: (state: FractalData, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    builder.addCase(startResetSettings, () => {});
  },
});
