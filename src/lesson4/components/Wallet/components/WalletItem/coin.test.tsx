import { Coin } from "./Coin";
import React from "react";
import { mount } from "enzyme";

test("Coin with passed value of 5 returns 5", () => {
  const coinValue = 5;
  const wrapper = mount(<Coin value={coinValue} />);
  const t = wrapper.find("div").first().props();
  expect(t.children).toBe(coinValue);
});

test("coin with passed value of 3 cannot be created", () => {
  const coinValue = 3;
  expect(() => mount(<Coin value={coinValue} />)).toThrow(
    "Cannot create a coin with this value"
  );
});
