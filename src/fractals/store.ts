import { LoginReducer, LogoutReducer } from "./reducers";
import {
  combineReducers,
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { FractalData } from "./components/FractalWindow";
import createSagaMiddleware from "redux-saga";
import { startResetSettings } from "./actions";
import { watchResetSettings } from "./sagas";

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
  fieldSize: 500,
  fractalCount: 1,
  fractalDepth: 5,
  baseColor: "#000000",
  play: false,
  playbackSpeed: 0,
};

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
      console.log("action", action.payload);
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    builder.addCase(startResetSettings, () => {});
  },
});

const rootReducer = combineReducers({
  fractal: fractalSlice.reducer,
  login: loginSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const sagaMiddleware = createSagaMiddleware();
export const storeCreator = () =>
  configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
  });
export const store = storeCreator();
store.dispatch(fractalSlice.actions.resetSettings);
sagaMiddleware.run(watchResetSettings);
