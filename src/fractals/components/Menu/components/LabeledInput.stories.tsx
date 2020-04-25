import { text, withKnobs } from "@storybook/addon-knobs";

import { LabeledInput } from "./LabeledInput";
import React from "react";

export const LabeledInputStory = () => (
  <LabeledInput
    inputStyle="number"
    label={text("Labeled input", "Labeled input")}
    onChange={() => {}}
  />
);

export default {
  title: "FractalMenu",
  component: LabeledInputStory,
  decorators: [withKnobs],
};
