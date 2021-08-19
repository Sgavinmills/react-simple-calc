import { performCalc } from "./helperFunctions";

describe("performCalc()", () => {
  test("should take a string of numbers and operators and return the result", () => {
    expect(performCalc("8 x 8")).toBe(64);
  });
});
