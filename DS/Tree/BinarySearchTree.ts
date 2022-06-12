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

  function insert(value: number) {
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
  printEnd(sectionName);
}