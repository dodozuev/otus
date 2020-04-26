import { text, withKnobs } from "@storybook/addon-knobs";

import { LabeledInput } from "./LabeledInput";
import React from "react";

export const LabeledInputStory = () => (
  <LabeledInput
    inputType="number"
    label={text("Labeled input", "Labeled input")}
    valueUpdated={() => alert("value updated")}
    value={121}
  />
);

export default {
  title: "FractalMenu",
  component: LabeledInputStory,
  decorators: [withKnobs],
};
