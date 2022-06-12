/** wrap function call in edges **/
const runFunctionWithEdges = (sectionName:string) => (fn: Function) => {
  console.log(`=== ${sectionName.toUpperCase()} START ===`);
  fn.call(this);
  console.log(`=== ${sectionName.toUpperCase()} END ===\n`);
}

export { runFunctionWithEdges };