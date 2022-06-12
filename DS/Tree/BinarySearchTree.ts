import { runFunctionWithEdges } from '../../utils';

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

const BinarySearchTree = () => {
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

    console.log(`After inserting ${value}:`);
    console.log(JSON.stringify(root, null, 2));
  }

  /** check if value exists **/
  function lookup(value:number) {
    if (!root) {
      console.log('Tree is empty.');
      return;
    }

    let currentNode: MyNodeProps | null = root;
    
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        console.log(`Found value ${value} in the tree.`);
        return;
      }
    }

    console.log(`Value ${value} not found.`);
  }
  
  return {
    insert,
    lookup,
  };
};

function main() {
  const bst = BinarySearchTree();
  bst.insert(9);
  bst.insert(4);
  bst.insert(20);
  bst.insert(1);
  bst.lookup(2);
  bst.lookup(20);
}

export function runBinarySearchTree() {
  runFunctionWithEdges('Binary Search Tree')(main);
}