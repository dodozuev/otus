import { number, withKnobs } from "@storybook/addon-knobs";

import { Coin } from "./coin";
import React from "react";

export const coinElement = () => <Coin value={number("coinValue", 2)} />;

export default {
  title: "CoinElement",
  component: coinElement,
  decorators: [withKnobs],
};
