import { FractalData } from "../FractalWindow";
import { FractalElement } from "./FractalElement";
import { FractalFieldStyled } from "./FractalField.styles";
import { Point } from "./Point";
import React from "react";

const windowWidth = 600;
const windowHeight = 600;

export function getPositions(elementCount: number): Point[] {
  if (elementCount === 0) {
    return [];
  }

  if (elementCount === 1) {
    return [{ X: windowWidth / 2, Y: windowHeight / 2 }];
  }

  const result = Array<Point>();

  const elementsOnProjection = Math.sqrt(elementCount);

  const elementsOnY = elementsOnProjection | 0;
  const yStep = windowHeight / (elementsOnY + 1);

  const elementsOnX = Math.ceil(elementCount / elementsOnY);
  const xStep = windowWidth / (elementsOnX + 1);

  for (
    let yPosition = yStep;
    yPosition < windowHeight;
    yPosition = yPosition + yStep
  ) {
    for (
      let xPosition = xStep;
      xPosition < windowWidth;
      xPosition = xPosition + xStep
    ) {
      result.push({ X: xPosition, Y: yPosition });
      if (result.length === elementCount) break;
    }
  }
  return result;
}

export const FractalField = (props: FractalData) => {
  const points = getPositions(props.fractalCount);
  return (
    <FractalFieldStyled>
      {points.map((p, index) => (
        <FractalElement
          depth={props.fractalDepth}
          posX={p.X}
          posY={p.Y}
          key={index}
        /> // TODO: think of fixing key dependency
      ))}
    </FractalFieldStyled>
  );
};
