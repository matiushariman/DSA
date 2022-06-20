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
  }

  /** left - root - right **/
  function inOrder(list: number[] = [], node: MyNodeProps = root) {

    if (node) {
      if (node.left) {
        inOrder(list, node.left);
      }
      
      list.push(node.value);

      if (node.right) {
        inOrder(list, node.right);
      }
    }
    
    return list;
  }

    /** root - left -right **/
  function preOrder(list: number[] = [], node: MyNodeProps = root) {
    if (node) {
      list.push(node.value);
      
      if (node.left) {
        preOrder(list, node.left);
      }

      if (node.right) {
        preOrder(list, node.right);
      }
    }
    
    return list;
  }

  return {
    insert,
    inOrder,
    preOrder,
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
  const inOrderList = bst.inOrder();
  console.log('InOrder Traversal: ', inOrderList);
  const preOrderList = bst.preOrder();
  console.log('PreOrder Traversal: ', preOrderList);
}

export function runDFS() {
  runFunctionWithEdges('DFS')(main);
}