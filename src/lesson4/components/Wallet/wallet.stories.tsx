import { array, boolean, text, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { Wallet } from "./wallet";

const defaultCoinArray = ["1", "2", "5"];

export default {
  title: "WalletElement",
  decorators: [withKnobs],
};

export const withWallet = () => (
  <Wallet
    ownerName={text("Owner", "Username")}
    coins={array("Coins", defaultCoinArray).map((x) => parseInt(x))}
  />
);

export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);
