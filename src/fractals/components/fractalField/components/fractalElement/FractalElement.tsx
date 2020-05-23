import { FractalBase, FractalProps } from "./FractalElement.styles";

import React from "react";

export const FractalElement = (props: FractalProps) => {
  return <FractalBase posX={props.posX} posY={props.posY} />;
};
