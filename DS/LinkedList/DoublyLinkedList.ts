import { printStart, printEnd } from '../../utils';

type DoublyLinkedListNode = {
  value: number;
  next: DoublyLinkedListNode | null;
};

const DoublyLinkedList = (value: number) => {
  let head:DoublyLinkedListNode = {
    value,
    next: null,
  };
  let tail = head;
  let length = 1;

  function Node(value:number): DoublyLinkedListNode {
    return {
      value,
      next: null,
    };  
  }

    /** print nodes value **/
  function printList():void {
    const arrNodes: number[] = [];
    let currentNode: DoublyLinkedListNode | null = head;
    
    while (currentNode !== null) {
      arrNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    console.log(arrNodes);
  }
  
  /** add new value to the end of SinglyLinkedList **/
  function append(value: number): void {
    const newNode = Node(value);
    tail.next = newNode;
    tail = newNode;
    length++;

    console.log(`After appending ${value}:`);
    printList();
  };

  /** add new value to the start of SinglyLinkedList  **/
  function prepend(value:number): void {
    const newNode = Node(value);
    newNode.next = head;
    head = newNode;
    length++;

    console.log(`After prepending ${value}:`);
    printList();
  }

  /** traverse to node of specific index **/
  function traverseToIndex(index: number) {
    let currentNode: DoublyLinkedListNode | null = head;
    let counter = 0;

    while (counter !== index && currentNode.next !== null) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
  
  /** add new value to specific index in SinglyLinkedList **/
  function insert(index: number, value: number): void {
    if (index >= length) {
      return append(value);
    }

    const newNode = Node(value);
    const leader = traverseToIndex(index - 1);
    const pointer = leader.next;
    leader.next = newNode;
    newNode.next = pointer;
    length++;

    console.log(`After inserting ${value} to index ${index}:`);
    printList();
  }

  /** remove value from specific index **/
  function remove(index: number) {
    const leader = traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode ? unwantedNode.next : null;
    
    console.log(`After removing node at index ${index}:`);
    printList();
  }
  
  return {
    append,
    printList,
    prepend,
    insert,
    remove,
  };
};


export function runDoublyLinkedList() {
  const sectionName = 'Doubly Linked List';
  printStart(sectionName);
  const myLinkedList = DoublyLinkedList(10);
  // 10 -> 5
  myLinkedList.append(5);
  // 10 -> 5 -> 16
  myLinkedList.append(16);
  // 1 -> 10 -> 5 -> 16
  myLinkedList.prepend(1);
  // 1 -> 10 -> 99 -> 5 -> 16
  myLinkedList.insert(2, 99);
  myLinkedList.remove(2);
  printEnd(sectionName);
}