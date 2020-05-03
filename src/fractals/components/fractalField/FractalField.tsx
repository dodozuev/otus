import { FractalData } from "../FractalWindow";
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
  console.log("elements on Y", elementsOnY);

  const elementsOnX = Math.ceil(elementCount / elementsOnY);
  const xStep = windowWidth / (elementsOnX + 1);
  console.log("elements on X", elementsOnX);

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
    }
  }
  return result;
}

export const FractalField = (props: FractalData) => {
  return <FractalFieldStyled />;
};
