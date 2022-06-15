import { findFactorialRecursive, } from './Factorial';
import { fibonacciRecursive } from './Fibonacci';
import { runFunctionWithEdges } from '../../utils';

let counter = 0;

const inception = ():void => {
  if (counter > 3) {
    console.log('done');

    return;
  }

  counter++;
  inception();
};

function main() {
  console.log(`Factorial of 5 is ${findFactorialRecursive(5)}`);
  console.log(`Fibonacci number at index 5 is ${fibonacciRecursive(5)}`);
}

export function runRecursion() {
  runFunctionWithEdges('Recursion')(main);
}
