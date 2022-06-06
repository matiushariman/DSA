import { printEnd, printStart } from '../../utils';

const MyArray = () => {
  let length = 0;
  const data: {[key: string]: string | number} = {};

  const get = (index:number) => data[index];

  /** add new item to the end of the array **/
  const push = (item:string|number):void => {
    data[length] = item;
    length++;

    console.log(`pushing ${item} to the array.`)
    console.log(`array: ${data}`)
  }

  /** remove last item from the array **/
  const pop = ():void => {
    delete data[length - 1];
    length--;
  }
  
  return {
    get,
    push,
  };
};

export function runArray() {
  const sectionName = 'Array';
  printStart(sectionName);
  const newArray = MyArray();
  newArray.push(1);
  newArray.push(2);
  printEnd(sectionName);
}