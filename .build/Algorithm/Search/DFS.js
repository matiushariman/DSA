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
  runDFS: () => runDFS
});
var import_utils = __toModule(require("../../utils"));
const MyNode = (value) => ({
  left: null,
  right: null,
  value
});
const BinarySearchTree = () => {
  let root = null;
  function insert(value) {
    const newNode = MyNode(value);
    if (!root) {
      root = newNode;
    } else {
      let currentNode = root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  function inOrder(list = [], node = root) {
    if (node) {
      if (node.left) {
        inOrder(list, node.left);
      }
      list.push(node.value);
      if (node.right) {
        inOrder(list, node.right);
      }
    }
    return list;
  }
  return {
    insert,
    inOrder
  };
};
function main() {
  const bst = BinarySearchTree();
  bst.insert(9);
  bst.insert(4);
  bst.insert(6);
  bst.insert(20);
  bst.insert(170);
  bst.insert(15);
  bst.insert(1);
  const inOrderList = bst.inOrder();
  console.log("InOrder Traversal: ", inOrderList);
}
function runDFS() {
  (0, import_utils.runFunctionWithEdges)("DFS")(main);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runDFS
});
//# sourceMappingURL=DFS.js.map
