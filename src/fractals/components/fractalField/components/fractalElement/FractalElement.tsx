import { FractalBase, FractalProps } from "./FractalElement.styles";

import React from "react";

export const FractalElement = (props: FractalProps) => {
  if (props.depth === 0) {
    return <FractalBase posX={props.posX} posY={props.posY} />;
  }

  return <FractalBase posX={props.posX} posY={props.posY} />; // TODO: fix that
};
