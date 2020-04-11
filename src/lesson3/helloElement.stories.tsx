import { HelloElement } from "./helloElement";
import React from "react";
import { action } from "@storybook/addon-actions";

export const HelloElementStory = () => (
  <HelloElement
    onClick={action("Clicked the button")}
    name={"Хороший человек"}
  />
);

export default {
  title: "HelloElement",
  component: HelloElementStory,
};
