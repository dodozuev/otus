import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import { fractalSlice } from "Modules/FractalMenu/slice";
import { loginSlice } from "Modules/Login/slice";
import { watchResetSettings } from "./modules/FractalMenu/sagas";

// TODO: export to separate file

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
