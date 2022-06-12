import { runFunctionWithEdges } from '../../utils';


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

  /** add item to the queue **/
  function enqueue(value:any) {
    const newNode = MyNode(value);

    if (length === 0) {
      first = newNode;
      last = newNode;
    } else if (last) {
        last.next = newNode;
        last = newNode;
      }
    length++;
    console.log(`After adding ${value} to the queue`)
    console.log(JSON.stringify(first));
  }

  /** remove the first element from the queue **/
  function dequeue() {
    if (!first) {
      return null;
    } else if (first === last) {
      last = null;
    }
  
    console.log(`After removing ${first.value} from the queue`)
    first = first.next;
    length--;
    console.log(JSON.stringify(first));
  }

  return {
    peek,
    enqueue,
    dequeue,
  };
}

function main() {
  const queue = Queue();
  queue.enqueue('Hello');
  queue.enqueue('World');
  queue.dequeue();
}

export function runQueue() {
  runFunctionWithEdges('Queue')(main);
}