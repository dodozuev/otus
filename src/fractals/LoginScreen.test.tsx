import { LoginScreen } from "./LoginScreen";
import React from "react";
import { shallow } from "enzyme";

describe("LoginScreen", () => {
  it("navigates to user page on submit", async () => {
    const name = "DZ";
    // <LoginScreen name="" />;
    const screen = shallow(<LoginScreen name="" onNameUpdate={(a) => null} />);
    screen.find("input").simulate("change", { target: { value: name } });
    await screen
      .find("form")
      .simulate("submit", { preventDefault: () => null });

    expect(localStorage.getItem("userName")).toBe(name);
  });
});
