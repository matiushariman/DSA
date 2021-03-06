import { bubbleSort } from './BubbleSort';
import { insertionSort } from './InsertionSort';
import { selectionSort } from './SelectionSort';
import { runFunctionWithEdges, } from '../../utils';

function main() {
  const numbers = [2,65,34,2,1,7,8];

  bubbleSort(numbers);
  selectionSort(numbers);
  insertionSort(numbers);
}

export function runSorting() {
  runFunctionWithEdges('Sorting')(main);
}
