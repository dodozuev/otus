import { LoginScreen } from "./LoginScreen";
import { LoginStatus } from "./reducers";
import { Provider } from "react-redux";
import React from "react";
import { mount } from "enzyme";
import { storeCreator } from "../../store";

"use strict";

describe("LoginScreen", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it("launches login after submitting form", async () => {
    const store = storeCreator();
    const name = "DZ";
    const screen = mount(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    screen.find("input").simulate("change", { target: { value: name } });

    await screen
      .find("form")
      .simulate("submit", { preventDefault: () => null });

    jest.runAllTimers();
    expect(store.getState().login.status).toBe(LoginStatus.InProgress);
  });
});
