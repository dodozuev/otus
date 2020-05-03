import { FractalContainer, FractalField } from "./FractalWindow.styles";

import { Menu } from "./Menu/Menu";
import React from "react";

export const FractalWindow = () => {
  return (
    <FractalContainer>
      <Menu onSubmit={() => {}} />
      <FractalField />
    </FractalContainer>
  );
};
