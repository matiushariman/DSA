import { printEnd, printStart } from '../../utils';

const MyArray = () => {
  let length = 0;
  const data: {[key: string]: string | number} = {};

  /** internal method to print array */
  const printArray = ():void => {
    console.log(`Array: ${JSON.stringify(data)}, length: ${length}`);
  }
  
  /** return element located at arr[index], time complexity O(1) */
  const get = (index:number) => data[index];

  /** add new item to the end of the array, time complexity O(1) */
  const push = (item:string|number):void => {
    data[length] = item;
    length++;

    console.log(`Pushing ${item} to the array.`)
    printArray();
  }

  /** remove last item from the array, time complexity O(1) */
  const pop = ():void => {
    delete data[length - 1];
    length--;
    console.log(`Removing (pop) item from the array.`);
    printArray();
  }

  /** remove first item from the array, time complexity O(n) */
  const shift = (): void => {
    for (let i = 0; i < length; i++) {
      data[i] = data[i+1];
    }
    delete data[length - 1];
    length--;
    console.log(`Removing (shift) item from the array.`)
    printArray();
  }
  
  return {
    get,
    push,
    pop,
    shift,
  };
};

export function runArray() {
  const sectionName = 'Array';
  printStart(sectionName);
  const newArray = MyArray();
  newArray.push(1);
  newArray.push(2);
  newArray.push(3);
  newArray.pop();
  newArray.shift();
  printEnd(sectionName);
}