var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import_Algorithm = __toModule(require("./Algorithm"));
var import_DS = __toModule(require("./DS"));
(0, import_DS.runArray)();
(0, import_DS.runSinglyLinkedList)();
(0, import_DS.runDoublyLinkedList)();
(0, import_DS.runArrayStack)();
(0, import_DS.runLinkedListStack)();
(0, import_DS.runQueue)();
(0, import_DS.runBinarySearchTree)();
(0, import_DS.runGraph)();
(0, import_Algorithm.runRecursion)();
(0, import_Algorithm.runSorting)();
//# sourceMappingURL=index.js.map
