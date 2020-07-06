import { FractalWindow } from "./FractalWindow";
import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

export const FractalWindowStory = () => <FractalWindow />;

export default {
  title: "FractalMenu",
  component: FractalWindowStory,
  decorators: [withKnobs],
};
