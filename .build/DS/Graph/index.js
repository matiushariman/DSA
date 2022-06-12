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
  runGraph: () => runGraph
});
var import_utils = __toModule(require("../../utils"));
const Graph = () => {
  let numberOfNodes = 0;
  const adjacentList = {};
  function addVertex(node) {
    adjacentList[node] = [];
    numberOfNodes++;
    console.log(`After adding vertex ${node}:`);
    console.log(JSON.stringify(adjacentList, null, 2));
  }
  function addEdge(node1, node2) {
    adjacentList[node1].push(node2);
    adjacentList[node2].push(node1);
    console.log("After adding edge: ");
    console.log(JSON.stringify(adjacentList, null, 2));
  }
  return {
    addVertex,
    addEdge
  };
};
function main() {
  const graph = Graph();
  graph.addVertex("0");
  graph.addVertex("1");
  graph.addVertex("2");
  graph.addVertex("3");
  graph.addVertex("4");
  graph.addEdge("0", "2");
}
function runGraph() {
  (0, import_utils.runFunctionWithEdges)("Graph")(main);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runGraph
});
//# sourceMappingURL=index.js.map
