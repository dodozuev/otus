import { MainScreen } from "./mainScreen";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./fractals/store";

export const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};
