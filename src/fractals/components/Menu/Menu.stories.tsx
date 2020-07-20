import { Menu } from "./Menu";
import React from "react";
import { initialFormState } from "../FractalWindow";
import { withKnobs } from "@storybook/addon-knobs";

export const MenuStory = () => (
  <Menu
    defaultValue={initialFormState}
    onSubmit={(e) => alert(JSON.stringify(e))}
  />
);

export default {
  title: "FractalMenu",
  component: MenuStory,
  decorators: [withKnobs],
};