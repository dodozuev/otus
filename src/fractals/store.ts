import { LoginReducer, LogoutReducer } from "./reducers";
import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

export enum LoginStatus {
  LoggedOut = 0,
  LoggedIn = 1,
  InProgress = 2,
}
export interface LoginState {
  status: LoginStatus;
  name: string;
}

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { status: LoginStatus.LoggedOut } as LoginState,
  reducers: {},
  extraReducers: (builder) => {
    LoginReducer(builder);
    LogoutReducer(builder);
  },
});

// TODO: export to separate file
export interface FractalState {
  fieldSize: number;
  fractalCount: number;
  fractalDepth: number;
  baseColor: string;
  playbackSpeed: number;
  play: boolean;
}

const initialFractalState: FractalState = {
  fieldSize: 400,
  fractalCount: 1,
  fractalDepth: 5,
  baseColor: "#000000",
  play: false,
  playbackSpeed: 0,
};

const fractalSlice = createSlice({
  name: "fractalSlice",
  initialState: initialFractalState,
  reducers: {
    resetSettings: () => initialFractalState,
    updateSettings: (state: FractalState, action) => {
      action.payload;
    },
  },
});

const rootReducer = combineReducers({
  fractal: fractalSlice.reducer,
  login: loginSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({ reducer: rootReducer });
