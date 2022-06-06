var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  printEnd: () => printEnd,
  printStart: () => printStart
});
const printStart = (sectionName) => {
  console.log(`=== ${sectionName.toUpperCase()} START ===`);
};
const printEnd = (sectionName) => {
  console.log(`=== ${sectionName.toUpperCase()} END ===
`);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  printEnd,
  printStart
});
//# sourceMappingURL=utils.js.map
