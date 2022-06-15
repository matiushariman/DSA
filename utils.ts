/** wrap function call in edges **/
const runFunctionWithEdges = (sectionName:string) => (fn: Function) => {
  console.log(`=== ${sectionName.toUpperCase()} START ===`);
  fn.call(this);
  console.log(`=== ${sectionName.toUpperCase()} END ===\n`);
};

const convertToSecond = (millisecond: number):string => ((millisecond % 60000) / 1000).toFixed(5);

export { runFunctionWithEdges, convertToSecond };

