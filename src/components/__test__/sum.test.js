import {sum} from "../sum.js"

test("Sum function Should calculate the sum of two numbers", () => {
  const result = sum(3,4);

  // Assertion
  expect(result).toBe(7);
});