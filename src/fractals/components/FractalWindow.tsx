import { FractalContainer } from "./FractalWindow.styles";
import { FractalField } from "./fractalField/FractalField";
import { Menu } from "./Menu/Menu";
import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

export interface FractalData {
  fieldSize: number;
  fractalCount: number;
  fractalDepth: number;
  baseColor: string;
  playbackSpeed: number;
  play: boolean;
}

export const FractalWindow = () => {
  const fractalMenuData = useSelector((state: RootState) => state.fractal);
  console.log(fractalMenuData);
  return (
    <FractalContainer>
      <Menu value={fractalMenuData} />
      <FractalField {...fractalMenuData} />
    </FractalContainer>
  );
};
