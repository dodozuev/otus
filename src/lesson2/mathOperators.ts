export type ScalarOperationType = (first: number, second: number) => number;

export type SingleVariableType = (value: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const power: ScalarOperationType = (
  first: number,
  second: number
): number => {
  return Math.pow(first, second);
};

export const factorial: SingleVariableType = (value: number): number => {
  if (value === 0) return 1;

  let result = 1;
  for (let i = 1; i <= value; i++) {
    result = result * i;
  }
  return result;
};

export const square: SingleVariableType = (value: number): number =>
  power(value, 2);

export const tupleItemMathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": power,
};

export const singleItemMathOperators: { [key: string]: SingleVariableType } = {
  "!": factorial,
  "**": square,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "!": FIRST,
  "**": FIRST,
  "+": SECOND,
  "-": SECOND,
};
