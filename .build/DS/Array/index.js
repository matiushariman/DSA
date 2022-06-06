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
  runArray: () => runArray
});
var import_utils = __toModule(require("../../utils"));
const MyArray = () => {
  let length = 0;
  const data = {};
  const get = (index) => data[index];
  const push = (item) => {
    data[length] = item;
    length++;
    console.log(`pushing ${item} to the array.`);
    console.log(`array: ${data}`);
  };
  const pop = () => {
    delete data[length - 1];
    length--;
  };
  return {
    get,
    push
  };
};
function runArray() {
  const sectionName = "Array";
  (0, import_utils.printStart)(sectionName);
  const newArray = MyArray();
  newArray.push(1);
  newArray.push(2);
  (0, import_utils.printEnd)(sectionName);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runArray
});
//# sourceMappingURL=index.js.map
