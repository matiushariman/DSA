import { printStart, printEnd } from '../../utils';

const Graph = () => {
  let numberOfNodes: number = 0;
  let adjacentList: {} = {};

  function addVertex(node) {
  }

  function addEdge(node1, node2) {
  }

  return {
    addVertex,
    addEdge,
  };
}

export function runGraph() {
  const sectionName = 'Graph';
  printStart(sectionName);
  const graph = Graph();
  printEnd(sectionName);
}