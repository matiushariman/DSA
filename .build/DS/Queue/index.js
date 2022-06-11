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
  runQueue: () => runQueue
});
var import_utils = __toModule(require("../../utils"));
const MyNode = (value) => ({
  value,
  next: null
});
const Queue = () => {
  let first = null;
  let last = null;
  let length = 0;
  function peek() {
    return first;
  }
  function enqueue(value) {
    const newNode = MyNode(value);
    if (length === 0) {
      first = newNode;
      last = newNode;
    } else if (last) {
      last.next = newNode;
      last = newNode;
    }
    length++;
    console.log(`After adding ${value} to the queue`);
    console.log(JSON.stringify(first));
  }
  function dequeue() {
    if (!first) {
      return null;
    } else if (first === last) {
      last = null;
    }
    console.log(`After removing ${first.value} from the queue`);
    first = first.next;
    length--;
    console.log(JSON.stringify(first));
  }
  return {
    peek,
    enqueue,
    dequeue
  };
};
function runQueue() {
  const sectionName = "Queue";
  (0, import_utils.printStart)(sectionName);
  const queue = Queue();
  queue.enqueue("Hello");
  queue.enqueue("World");
  queue.dequeue();
  (0, import_utils.printEnd)(sectionName);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runQueue
});
//# sourceMappingURL=index.js.map
