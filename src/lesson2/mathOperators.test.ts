import { add, div, minus, mul, power, square } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });
  it("power 2 by 2 to equal 4", () => {
    expect(power(2, 2)).toBe(4);
  });
  it("power 3 by 5 to equal 243", () => {
    expect(power(3, 5)).toBe(243);
  });
  it("square 5 to equal 25", () => {
    expect(square(3)).toBe(9);
  });
  it("square 1 to equal 1", () => {
    expect(square(1)).toBe(1);
  });
});
