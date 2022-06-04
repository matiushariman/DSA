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
  function get() {
    return {
      head,
      tail,
      length
    };
  }
  function append(value2) {
    const newNode = Node(value2);
    tail.next = newNode;
    tail = newNode;
    length++;
  }
  ;
  function prepend(value2) {
    const newNode = Node(value2);
    newNode.next = head;
    head = newNode;
    length++;
  }
  return {
    append,
    get,
    prepend
  };
};
const myLinkedList = SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.get());
myLinkedList.prepend(1);
console.log(myLinkedList.get());
//# sourceMappingURL=SinglyLinkedList.js.map
