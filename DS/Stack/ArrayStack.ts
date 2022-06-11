import { printStart, printEnd } from '../../utils';

const ArrayStack = () => {
  const array:any = [];

  /** return top of the stack **/
  function peek() {
    return array[array.length - 1];
  }

  /** push new value to the top of the stack **/
  function push(value:any) {
    array.push(value);
    console.log(`After pushing ${value}:`);
    console.log(array);
  }

    /** remove value from the top of the stack **/
  function pop() {    
    console.log(`Removing ${array[array.length - 1]} from the stack`);
    array.pop();
    
    console.log(array);
  }
  
  return {
    peek,
    push,
    pop,
  };
};

export function runArrayStack() {
  const sectionName = 'ARRAY STACK';
  printStart(sectionName);
  const stack = ArrayStack();
  stack.peek();
  stack.push('hello');
  stack.push('world');
  stack.pop();
  printEnd(sectionName);
}