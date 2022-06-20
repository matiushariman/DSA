import { runFunctionWithEdges, } from '../../utils';

type MyNodeProps = {
  left: MyNodeProps,
  right: MyNodeProps,
  value: number,
} | null;

const MyNode = (value:number): MyNodeProps => ({
  left: null,
  right: null,
  value,
});

export const BinarySearchTree = () => {
  let root: MyNodeProps = null;

  /** insert new node to tree **/
  function insert(value: number) {
    const newNode = MyNode(value);
    
    if (!root) {
      root = newNode;
    } else {
      let currentNode = root;

      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
  
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  function breadthFirstSearch() {
    let currentNode = root;
    const list:number[] = [];
    const queue:any[] = [];

    if (currentNode) {
      queue.push(currentNode);
    }

    while (queue.length > 0) {
      currentNode = queue.shift();

      if (currentNode) {
        list.push(currentNode.value);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

    return list;
  }

  
  return {
    insert,
    breadthFirstSearch,
  };
};

function main() {
  const bst = BinarySearchTree();
  bst.insert(9);
  bst.insert(4);
  bst.insert(6);
  bst.insert(20);
  bst.insert(170);
  bst.insert(15);
  bst.insert(1);
  const bfs = bst.breadthFirstSearch();

  console.log('breadth first search: ', bfs);
}

export function runBFS() {
  runFunctionWithEdges('BFS')(main);
}