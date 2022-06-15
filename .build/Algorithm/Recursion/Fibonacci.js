var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  fibonacciRecursive: () => fibonacciRecursive
});
const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fibonacciRecursive
});
//# sourceMappingURL=Fibonacci.js.map
