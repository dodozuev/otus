import { mount, shallow } from "enzyme";

import React from "react";
import { Wallet } from "./wallet";

test("Wrapper correctly returns owner name", () => {
  const coinValues = [1, 2, 5];
  const ownerName = "Testuser";
  const wrapper = mount(<Wallet coins={coinValues} ownerName={ownerName} />);
  const walletDescription = wrapper.find("span").first().text();
  expect(walletDescription).toBe(ownerName + "'s wallet");
});

test("Wrapper returns error text when bad coin inserted", () => {
  const coinValues = [3];
  const ownerName = "Testuser";
  const wrapper = mount(<Wallet coins={coinValues} ownerName={ownerName} />);
  const errorMessage = wrapper.find("div").first().text();
  const expectedError = "Error: unable to create coin from 3";
  expect(errorMessage).toBe(expectedError);
});

test("Wrapper returns array of coins for several coin values", () => {
  const coinValues = [1, 2];
  const ownerName = "Testuser";
  const wrapper = mount(<Wallet coins={coinValues} ownerName={ownerName} />);
  console.log(wrapper.debug());

  const coinsCount = wrapper.find({ "data-testid": "coin" }).length;
  expect(coinsCount).toBe(coinValues.length * 2); // TODO: узнать, как обходить проблему с копируемыми testid
});
