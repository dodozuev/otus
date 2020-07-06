import { MainScreen } from "./mainScreen";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};
