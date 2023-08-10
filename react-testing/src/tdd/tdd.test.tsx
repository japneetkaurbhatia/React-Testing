import { sumOfNumbers } from "./tdd";

describe("when arguments passed are positive numbers", () => {
  it("should return correct sum of numbers", () => {
    const result = sumOfNumbers(4, 5);
    expect(result).toBe(9);
  });
});

describe("when arguments passed are non-positive numbers", () => {
  it("should throw an error", () => {
    let error;
    try {
      const result = sumOfNumbers(-4, -5);
      expect(result).toBe(9);
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
    //expect(error.message).toBe("Numbers are non-positive")
  });
});
