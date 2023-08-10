export const sumOfNumbers = (number1: number, number2: number) => {
  if (number1 < 0 || number2 < 0) throw new Error("Numbers are non-positive");
  return number1 + number2;
};
