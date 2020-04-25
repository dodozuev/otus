export interface FractalElementProps {
  depth: number;
}

export const FractalElement = (props: FractalElementProps) => {
  if (props.depth === 0) {
    return;
  }
};
