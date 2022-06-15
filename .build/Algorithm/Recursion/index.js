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
  runRecursion: () => runRecursion
});
var import_Factorial = __toModule(require("./Factorial"));
var import_Fibonacci = __toModule(require("./Fibonacci"));
var import_ReverseString = __toModule(require("./ReverseString"));
var import_utils = __toModule(require("../../utils"));
let counter = 0;
const inception = () => {
  if (counter > 3) {
    console.log("done");
    return;
  }
  counter++;
  inception();
};
function main() {
  console.log(`Factorial of 5 is ${(0, import_Factorial.findFactorialRecursive)(5)}`);
  console.log(`Fibonacci number at index 5 is ${(0, import_Fibonacci.fibonacciRecursive)(5)}`);
  console.log(`Reverse of abc is ${(0, import_ReverseString.reverseString)("abc")}`);
}
function runRecursion() {
  (0, import_utils.runFunctionWithEdges)("Recursion")(main);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runRecursion
});
//# sourceMappingURL=index.js.map
