import { printStart, printEnd } from '../../utils';


type MyNode = {
  value: null | any,
  next: MyNode | null,
} | null;

const MyNode = (value: any): MyNode => ({
  value,
  next: null,
});

const Queue = () => {
  let first: MyNode = null;
  let last: MyNode = null;
  let length: number = 0;

  /** return first item in the queue **/
  function peek() {
    return first;
  }

  function enqueue(value:any) {
  }

  function dequeue() {
  }

  return {
    peek,
    enqueue,
    dequeue,
  };
}

export function runQueue() {
  const sectionName = 'Queue';
  printStart(sectionName);
  printEnd(sectionName);
}