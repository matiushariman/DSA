import { runFunctionWithEdges } from '../../utils';

const Graph = () => {
  let numberOfNodes: number = 0;
  const adjacentList: {[key: string]: string[]} = {};

  /** add vertex **/
  function addVertex(node: string) {
    adjacentList[node] = [];
    numberOfNodes++;
    console.log(`After adding vertex ${node}:`);
    console.log(JSON.stringify(adjacentList, null, 2));
  }

  /** add edge to vertex **/
  function addEdge(node1:string, node2:string) {
    adjacentList[node1].push(node2);
    adjacentList[node2].push(node1);

    console.log('After adding edge: ');
    console.log(JSON.stringify(adjacentList, null, 2));
  }

  return {
    addVertex,
    addEdge,
  };
}

function main() {
  const graph = Graph();
  graph.addVertex('0');
  graph.addVertex('1');
  graph.addVertex('2');
  graph.addVertex('3');
  graph.addVertex('4');
  graph.addEdge('0', '2');
}

export function runGraph() {
  runFunctionWithEdges('Graph')(main);
}