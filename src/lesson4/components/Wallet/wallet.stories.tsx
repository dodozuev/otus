import { boolean, text, withKnobs } from "@storybook/addon-knobs";

import { Coin } from "./components/WalletItem/coin";
import React from "react";
import { Wallet } from "./wallet";

export default {
  title: "WalletElement",
  decorators: [withKnobs],
};

export const withWallet = () => (
  <Wallet ownerName={text("Owner", "Username")}>
    <Coin value={2}></Coin>
  </Wallet>
);

export const withWalletAndBadCoinInside = () => (
  <Wallet ownerName={text("Owner", "Username")}>
    <Coin value={5252}></Coin>
  </Wallet>
);
