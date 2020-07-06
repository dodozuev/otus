import { Menu } from "./Menu";
import React from "react";
import { initialFractalState } from "../../store";
import { withKnobs } from "@storybook/addon-knobs";

export const MenuStory = () => <Menu value={initialFractalState} />;

export default {
  title: "FractalMenu",
  component: MenuStory,
  decorators: [withKnobs],
};
