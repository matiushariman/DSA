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

  /** push new value to the top of the stack **/
  function push(value:any) {
    const newNode = MyNode(value);

    if (length === 0) {
      top = newNode;
      bottom = newNode;
    } else {
      const pointer = top;
      top = newNode;

      if (top) {
        top.next = pointer;
      }
    }
    length++;

    console.log(`After pushing ${value}:`);
    console.log(JSON.stringify(top));
  }
  
  return {
    peek,
    push,
  };
};

export function runStack() {
  const sectionName = 'STACK';
  printStart(sectionName);
  const stack = Stack();
  stack.peek();
  stack.push('hello');
  stack.push('world');
  printEnd(sectionName);
}