import React, { useState } from "react";

import { FractalContainer } from "./FractalWindow.styles";
import { FractalField } from "./fractalField/FractalField";
import { Menu } from "./Menu/Menu";

export interface FractalData {
  fieldSize: number;
  fractalCount: number;
  fractalDepth: number;
  baseColor: string;
  playbackSpeed: number;
  play: boolean;
}

export interface FractalProps {
  onSubmit: (values: FractalData) => void;
  defaultValue: FractalData;
}

export const initialFormProps: FractalData = {
  fieldSize: 400,
  fractalCount: 1,
  fractalDepth: 5,
  baseColor: "#000000",
  play: false,
  playbackSpeed: 0,
};

export const FractalWindow = () => {
  const [state, setState] = useState(initialFormProps);

  return (
    <FractalContainer>
      <Menu
        onSubmit={(v) => {
          setState(v);
        }}
        defaultValue={state}
      />
      <FractalField {...state} />
    </FractalContainer>
  );
};
