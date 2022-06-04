const SinglyLinkedList = (value) => {
  const head = {
    value,
    next: null
  };
  let tail = head;
  let length = 1;
  function get() {
    return {
      head,
      tail,
      length
    };
  }
  function append(value2) {
    const newNode = {
      value: value2,
      next: null
    };
    tail.next = newNode;
    tail = newNode;
    length++;
  }
  ;
  return {
    append,
    get
  };
};
const myLinkedList = SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.get());
//# sourceMappingURL=SinglyLinkedList.js.map
