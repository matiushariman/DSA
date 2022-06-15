import { convertToSecond } from '../../utils';

/** sort array of numbers using selection sort **/
export const selectionSort = (arr: number[]): void => {
  const start = performance.now();

  for (let i = 0; i < arr.length; i++) {
    let smallestItemIndex = i;
  
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestItemIndex] > arr[j]) {
        smallestItemIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[smallestItemIndex];
    arr[smallestItemIndex] = temp;
  }
  
  console.log(`Selection sort result: ${arr}`);
  console.log(`Selection sort takes ${convertToSecond(performance.now() - start)} s.`);
}