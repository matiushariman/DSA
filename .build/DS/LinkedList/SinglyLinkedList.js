var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  runSinglyLinkedList: () => runSinglyLinkedList
});
var import_utils = __toModule(require("../../utils"));
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
  function reverse() {
    if (!head.next) {
      return head;
    }
    let first = head;
    tail = head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    head.next = null;
    head = first;
    console.log("After reversing the list: ");
    printList();
  }
  return {
    append,
    printList,
    prepend,
    insert,
    remove,
    reverse
  };
};
function runSinglyLinkedList() {
  const sectionName = "Singly Linked List";
  (0, import_utils.printStart)(sectionName);
  const myLinkedList = SinglyLinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.remove(2);
  myLinkedList.reverse();
  (0, import_utils.printEnd)(sectionName);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runSinglyLinkedList
});
//# sourceMappingURL=SinglyLinkedList.js.map
