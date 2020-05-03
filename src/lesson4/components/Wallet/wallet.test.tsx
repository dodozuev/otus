import { Coin } from "./components/WalletItem/coin";
import React from "react";
import { Wallet } from "./wallet";
import { mount } from "enzyme";

test("Wrapper correctly returns owner name", () => {
  const ownerName = "Testuser";
  const wrapper = mount(<Wallet ownerName={ownerName} />);
  const walletDescription = wrapper.find("span").first().text();
  expect(walletDescription).toBe(ownerName + "'s wallet");
});

test("Wrapper returns array of coins for several coin values", () => {
  const ownerName = "Testuser";
  const wrapper = mount(
    <Wallet ownerName={ownerName}>
      <Coin value={1} />
      <Coin value={2} />
    </Wallet>
  );

  const coinsCount = wrapper.find("Coin").length;
  expect(coinsCount).toBe(2);
});

test("Wallet does not throw error when passed wrong coin", () => {
  const coinValue = 643;
  const ownerName = "Testuser";
  const wrapper = mount(
    <Wallet ownerName={ownerName}>
      <Coin value={coinValue}></Coin>
    </Wallet>
  );

  var text = wrapper.find("div");
  expect(text.text()).toBe("Произошла ошибка :'(");
});
