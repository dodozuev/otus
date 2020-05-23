import {
  mathOperatorsPriorities,
  mathPriorities,
  singleItemMathOperators,
  tupleItemMathOperators,
} from "./mathOperators";

import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";

const [FIRST, SECOND] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (tupleItemMathOperators[item]) {
        result = [
          ...result.slice(0, -2),
          tupleItemMathOperators[item](Number(prevItem), Number(nextItem)),
        ];
      } else {
        if (singleItemMathOperators[item]) {
          result = [
            ...result.slice(0, -1),
            singleItemMathOperators[item](Number(prevItem)),
          ];
        } else {
          throw new TypeError("Unexpected stack");
        }
      }
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = tupleItemMathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
