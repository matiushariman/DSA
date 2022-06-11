type MyNodeProps = {
  value: any,
  next: MyNodeProps | null,
};

const MyNode = (value: any): MyNodeProps => ({ value, next: null });

const Stack = () => {
  let top: MyNodeProps = null;
  let bottom: MyNodeProps = null;
  let length: number = 0;
};