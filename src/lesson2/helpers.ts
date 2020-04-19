import { ParsedLineType } from "./parser";
import { singleItemMathOperators } from "./mathOperators";

export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const replaceSingleOperations = (
  stack: ParsedLineType
): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    const prevItem = result[result.length - 1];

    console.log("Rresult", result);
    console.log("Rprevitem", prevItem);
    console.log("Ritem", item);

    if (!isNumber(String(item)) && singleItemMathOperators[item]) {
      const operatedValue = singleItemMathOperators[item](Number(prevItem));
      console.log("operated", operatedValue);
      result = [...result.slice(0, result.length - 1), operatedValue];
      console.log("result", result);
    } else result.push(item);

    return result;
  }, []);
