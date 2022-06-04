const SinglyLinkedList = (value) => {
  let head = {
    value,
    next: null
  };
  let tail = head;
  let length = 1;
  function Node(value2) {
    return {
      value: value2,
      next: null
    };
  }
  function printList() {
    const arrNodes = [];
    let currentNode = head;
    while (currentNode !== null) {
      arrNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arrNodes);
  }
  function append(value2) {
    const newNode = Node(value2);
    tail.next = newNode;
    tail = newNode;
    length++;
    console.log(`After appending ${value2}:`);
    printList();
  }
  ;
  function prepend(value2) {
    const newNode = Node(value2);
    newNode.next = head;
    head = newNode;
    length++;
    console.log(`After prepending ${value2}:`);
    printList();
  }
  function traverseToIndex(index) {
    let currentNode = head;
    let counter = 0;
    while (counter !== index && currentNode.next !== null) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  function insert(index, value2) {
    if (index >= length) {
      return append(value2);
    }
    const newNode = Node(value2);
    const leader = traverseToIndex(index - 1);
    const pointer = leader.next;
    leader.next = newNode;
    newNode.next = pointer;
    length++;
    console.log(`After inserting ${value2} to index ${index}:`);
    printList();
  }
  function remove(index) {
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
    remove
  };
};
const myLinkedList = SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
//# sourceMappingURL=SinglyLinkedList.js.map
