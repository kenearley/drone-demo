import { sum, slowSum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + -1 to equal 0", () => {
  expect(sum(1, -1)).toBe(0);
});

test("adds 1 + -2 to equal -1", () => {
  expect(sum(1, -2)).toBe(-1);
});

describe("slow test @slow", () => {
  test("adds 5 + 4 to equal 9 (slowly)", () => {
    expect(slowSum(5, 4)).toBe(9);
  });
});
