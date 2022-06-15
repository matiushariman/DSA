/** calculate factorial recursively **/
export const findFactorialRecursive = (number: number):number => {
  if (number === 1) {
    return number;
  }

  return (number * findFactorialRecursive(number - 1));
};

/** calculate factorial iteratively **/
export const findFactorialIterative = (number: number):number => {
  let factorial = number;

  for (let i = number - 1; i > 0; i--) {
    factorial = factorial * i;
  }

  return factorial;
}