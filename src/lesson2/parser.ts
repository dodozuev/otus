import {
  singleItemMathOperators,
  tupleItemMathOperators,
} from "./mathOperators";

import { isNumber } from "./helpers";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  const isSingleOperation = (val: string): boolean =>
    singleItemMathOperators.hasOwnProperty(val);

  const isTupleOperation = (val: string): boolean =>
    tupleItemMathOperators.hasOwnProperty(val);

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);

    const isValidOperatorPush =
      (isNumber(prevItem) || isSingleOperation(prevItem)) &&
      !isNumber(item) &&
      (isTupleOperation(item) || isSingleOperation(item));

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
