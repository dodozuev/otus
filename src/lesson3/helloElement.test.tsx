import { HelloElement } from "./helloElement";
import React from "react";
import { shallow } from "enzyme";

test("Renders helloElement with proper header", () => {
  expect(
    shallow(<HelloElement name="TestName" />).matchesElement(
      <>
        <h3>Привет, TestName</h3>
        <button>Нажать кнопочку</button>
      </>
    )
  ).toBe(true);
});
