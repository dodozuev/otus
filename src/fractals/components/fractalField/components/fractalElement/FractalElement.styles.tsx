import styled from "@emotion/styled";

export interface FractalProps {
  posX: number;
  posY: number;
  depth?: number;
}

export const FractalBase = styled.div<FractalProps>`
  background-color: red;
  left: ${(props) => props.posX}px;
  top: ${(props) => props.posY}px;
  width: 100px;
  height: 3px;
  position: absolute;
  transform: translate(-50%, -50%) rotate(22deg);
  transform-origin: center;
`;
