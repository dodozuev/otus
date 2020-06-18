import { LoginScreen } from "./LoginScreen";
import React from "react";
import { shallow } from "enzyme";

describe("LoginScreen", () => {
  it("navigates to user page on submit", async () => {
    const name = "DZ";
    const screen = shallow(<LoginScreen />);
    screen.find("input").simulate("change", { target: { value: name } });
    await screen
      .find("form")
      .simulate("submit", { preventDefault: () => null });

    expect(localStorage.getItem("userName")).toBe(name);
  });
});
