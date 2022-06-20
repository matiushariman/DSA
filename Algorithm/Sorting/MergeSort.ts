const merge = (left: number[], right: number[]): number[] => {
  const result:number[] = [];
  let leftIndex:number = 0;
  let rightIndex:number = 0;

  while (leftIndex < left.length && rightIndex < right.length)   {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) {
    return arr;
  }

  const middle:number = Math.floor(arr.length / 2);
  const left:number[] = arr.slice(0, middle);
  const right:number[] = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};