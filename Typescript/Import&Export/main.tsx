import { addition, subtraction, multiplication, division } from "./math";

export function learnImports(): number {
  console.log(addition(4, 2));
  console.log(subtraction(4, 2));
  console.log(multiplication(4, 2));
  console.log(division(4, 2));
  return 1;
}
