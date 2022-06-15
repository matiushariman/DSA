var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  reverseString: () => reverseString
});
const reverseString = (str) => {
  if (str.length === 1) {
    return str;
  }
  return reverseString(str.slice(1, str.length)) + str.charAt(0);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  reverseString
});
//# sourceMappingURL=ReverseString.js.map
