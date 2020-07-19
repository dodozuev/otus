import {
  LoginReducer,
  LoginState,
  LoginStatus,
  LogoutReducer,
} from "./reducers";

import { createSlice } from "@reduxjs/toolkit";

export interface FractalState {
  fieldSize: number;
  fractalCount: number;
  fractalDepth: number;
  baseColor: string;
  playbackSpeed: number;
  play: boolean;
}

export const initialFractalState: FractalState = {
  fieldSize: 500,
  fractalCount: 1,
  fractalDepth: 5,
  baseColor: "#000000",
  play: false,
  playbackSpeed: 0,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { status: LoginStatus.LoggedOut } as LoginState,
  reducers: {},
  extraReducers: (builder) => {
    LoginReducer(builder);
    LogoutReducer(builder);
  },
});
