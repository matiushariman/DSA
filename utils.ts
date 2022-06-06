/**
print the beginning of section name
**/
const printStart =(sectionName:string):void => {
  console.log(`=== ${sectionName.toUpperCase()} START ===`);
};

/**
print the end of section name
**/
const printEnd =(sectionName:string):void => {
  console.log(`=== ${sectionName.toUpperCase()} END ===\n`);
};

export { printEnd, printStart };