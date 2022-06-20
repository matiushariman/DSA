var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  convertToSecond: () => convertToSecond,
  runFunctionWithEdges: () => runFunctionWithEdges
});
const runFunctionWithEdges = (sectionName) => (fn) => {
  console.log(`=== ${sectionName.toUpperCase()} START ===`);
  fn.call(void 0);
  console.log(`=== ${sectionName.toUpperCase()} END ===
`);
};
const convertToSecond = (millisecond) => (millisecond % 6e4 / 1e3).toFixed(5);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertToSecond,
  runFunctionWithEdges
});
//# sourceMappingURL=utils.js.map
