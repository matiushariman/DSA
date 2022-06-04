type LinkedListNode = {
  value: number;
  next: LinkedListNode | null;
};

const SinglyLinkedList = (value: number) => {
  const head:LinkedListNode = {
    value,
    next: null,
  };
  let tail = head;
  let length = 1;

  function get(): { head: LinkedListNode, tail: LinkedListNode, length: number } {
    return {
      head, tail, length,
    };
  }
  
  function append(value: number): void {
    const newNode = {
      value,
      next: null,
    };
    tail.next = newNode;
    tail = newNode;
    length++;
  };

  return {
    append,
    get,
  };
};


const myLinkedList = SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// 10 -> 5 -> 16
console.log(myLinkedList.get());