import { printStart, printEnd } from '../../utils';

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

  function lookup(value:number) {
  }
  
  return {
    insert,
    lookup,
  };
};

export function runBinarySearchTree() {
  const sectionName = 'Binary Search Tree';
  printStart(sectionName);
  const bst = BinarySearchTree();
  bst.insert(10);
  bst.insert(8);
  bst.insert(12);
  
  printEnd(sectionName);
}