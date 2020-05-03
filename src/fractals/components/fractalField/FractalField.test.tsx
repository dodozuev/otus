import { getPositions } from "./FractalField";

describe("getPositions", () => {
  it("Should return middle of the window for 1 piece", () => {
    const result = getPositions(1);
    expect(result).toStrictEqual([{ X: 300, Y: 300 }]);
  });

  it("Should show two horizontal for 2 pieces", () => {
    const result = getPositions(2);
    expect(result).toStrictEqual([
      { X: 200, Y: 300 },
      { X: 400, Y: 300 },
    ]);
  });

  it("Should show 3 in a line for 3 pieces", () => {
    const result = getPositions(3);
    expect(result).toStrictEqual([
      { X: 150, Y: 300 },
      { X: 300, Y: 300 },
      { X: 450, Y: 300 },
    ]);
  });

  it("Should show 2 by 2 for 4 pieces", () => {
    const result = getPositions(4);
    console.log("aAAAAAAAAA", result);

    expect(result).toStrictEqual([
      { X: 200, Y: 200 },
      { X: 400, Y: 200 },
      { X: 200, Y: 400 },
      { X: 400, Y: 400 },
    ]);
  });
});
