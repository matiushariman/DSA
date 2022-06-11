import { printStart, printEnd } from '../../utils';

type MyNodeProps = {
  value: any,
  next: MyNodeProps | null,
} | null;

const MyNode = (value: any): MyNodeProps => ({ value, next: null });

const Stack = () => {
  let top: MyNodeProps = null;
  let bottom: MyNodeProps = null;
  let length: number = 0;

  /** return top of the stack **/
  function peek(): MyNodeProps {
    console.log(`Returning ${top}`);
    return top;
  }
  
  return {
    peek,
  };
};

export function runStack() {
  const sectionName = 'STACK';
  printStart(sectionName);
  const stack = Stack();
  stack.peek();
  printEnd(sectionName);
}