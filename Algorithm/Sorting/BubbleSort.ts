import { convertToSecond } from '../../utils';

/** sort array of numbers using bubble sort **/
export const bubbleSort = (arr: number[]): void => {
  const start = performance.now();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  console.log(`Bubble sort result: ${arr}`);
  console.log(`Bubble sort takes ${convertToSecond(performance.now() - start)} s.`);
}