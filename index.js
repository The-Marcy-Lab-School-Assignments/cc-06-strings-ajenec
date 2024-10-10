//write your code here

//1
const reverseString = (str) => {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
};

//console.log(reverseString("hello"));

//2
const reverseZigZagString = (str) => {
  let isSmall = true;
  let result = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    if (isSmall) {
      result += str[i].toLowerCase();
      isSmall = false;
    } else {
      result += str[i].toUpperCase();
      isSmall = true;
    }
  }
  return result;
};
console.log(reverseZigZagString("hello"));
