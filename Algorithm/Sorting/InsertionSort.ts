import { convertToSecond } from '../../utils';

/** sort array of numbers using insertion sort **/
export const insertionSort = (arr: number[]): void => {
  const start = performance.now();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  console.log(`Insertion sort result: ${arr}`);
  console.log(`Insertion sort takes ${convertToSecond(performance.now() - start)} s.`);
}