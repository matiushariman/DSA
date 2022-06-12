import { printStart, printEnd } from '../../utils';

const Graph = () => {
  let numberOfNodes: number = 0;
  const adjacentList: {[key: string]: string[] | number[]} = {};

  /** add vertex **/
  function addVertex(node: string) {
    adjacentList[node] = [];
    numberOfNodes++;
    console.log(`After adding vertex ${node}:`);
    console.log(JSON.stringify(adjacentList, null, 2));
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
  graph.addVertex('0');
  graph.addVertex('1');
  graph.addVertex('2');
  graph.addVertex('3');
  graph.addVertex('4');
  printEnd(sectionName);
}