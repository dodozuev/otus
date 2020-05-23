import { ParsedLineType } from "./parser";
import { singleItemMathOperators } from "./mathOperators";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const replaceSingleOperations = (
  stack: ParsedLineType
): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    if (!isNumber(String(item)) && singleItemMathOperators[item]) {
      const operatedValue = singleItemMathOperators[item](Number(prevItem));
      result = [...result.slice(0, result.length - 1), operatedValue];
    } else result.push(item);

    return result;
  }, []);
