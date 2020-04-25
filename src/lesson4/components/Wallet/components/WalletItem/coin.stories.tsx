import { Coin } from "./coin";
import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

export const coinElementStory = () => <Coin value={2} />;

export default {
  title: "CoinElement",
  component: coinElementStory,
  decorators: [withKnobs],
};
