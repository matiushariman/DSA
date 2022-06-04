type SinglyLinkedListNode = {
  value: number;
  next: SinglyLinkedListNode | null;
};

type GetSinglyLinkedList = {
  head: SinglyLinkedListNode; 
  tail: SinglyLinkedListNode;
  length: number;
};

const SinglyLinkedList = (value: number) => {
  let head:SinglyLinkedListNode = {
    value,
    next: null,
  };
  let tail = head;
  let length = 1;

  function Node(value:number): SinglyLinkedListNode {
    return {
      value,
      next: null,
    };  
  }
  
  /** return current state of SinglyLinkedList **/
  function get(): GetSinglyLinkedList {
    return {
      head, tail, length,
    };
  }

  /** add new value to the end of SinglyLinkedList **/
  function append(value: number): void {
    const newNode = Node(value);
    tail.next = newNode;
    tail = newNode;
    length++;
  };

  /** add new value to the start of SinglyLinkedList  **/
  function prepend(value:number): void {
    const newNode = Node(value);
    newNode.next = head;
    head = newNode;
    length++;
  }
  
  return {
    append,
    get,
    prepend,
  };
};


const myLinkedList = SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
// 10 -> 5 -> 16
console.log(myLinkedList.get());
myLinkedList.prepend(1);
// 1 -> 10 -> 5 -> 16
console.log(myLinkedList.get());