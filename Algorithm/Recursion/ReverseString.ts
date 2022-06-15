/** reverse string using recursion **/
export const reverseString = (str:string):string => {
  if (str.length === 1) {
    return str;
  }

  return reverseString(str.slice(1, str.length)) + str.charAt(0);
};