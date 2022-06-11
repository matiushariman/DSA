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
  runStack: () => runStack
});
var import_utils = __toModule(require("../../utils"));
const MyNode = (value) => ({ value, next: null });
const Stack = () => {
  let top = null;
  let bottom = null;
  let length = 0;
  function peek() {
    console.log(`Returning ${top}`);
    return top;
  }
  function push(value) {
    const newNode = MyNode(value);
    if (length === 0) {
      top = newNode;
      bottom = newNode;
    } else {
      const pointer = top;
      top = newNode;
      if (top) {
        top.next = pointer;
      }
    }
    length++;
    console.log(`After pushing ${value}:`);
    console.log(JSON.stringify(top));
  }
  function pop() {
    if (!top) {
      console.log("Stack is empty!");
      return null;
    }
    console.log(`Removing ${top.value} from the stack`);
    const pointer = top;
    top = top.next;
    length--;
    console.log(JSON.stringify(top));
  }
  return {
    peek,
    push,
    pop
  };
};
function runStack() {
  const sectionName = "STACK";
  (0, import_utils.printStart)(sectionName);
  const stack = Stack();
  stack.peek();
  stack.push("hello");
  stack.push("world");
  stack.pop();
  (0, import_utils.printEnd)(sectionName);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runStack
});
//# sourceMappingURL=index.js.map
