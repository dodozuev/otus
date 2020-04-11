import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

import { parser } from "./parser";
import { replaceSingleOperations } from "./helpers";

export const runner = (line: string): number => {
  let stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  stack = replaceSingleOperations(stack);

  const firstPrioritiesRes = firstPrioritiesCalc(stack);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};
