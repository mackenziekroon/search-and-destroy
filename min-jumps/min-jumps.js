"use strict";

// edge case - if array.length <= 1 return 0
// arrays cannot contain a 0(zero)
// create a variable to hold num of steps
// create a variable to hold maximum steps
// create a variable to hold count - return count

// Complete this algo
const minJumps = (arr) => {
  if (arr.length <= 1) {
    return 0;
  }
  if (arr.includes(0)) {
    return -1;
  }
  let maxReach = arr[0];
  let steps = arr[0];
  let jumps = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log("i-->", i);
    console.log("Array[i]", arr[i]);
    console.log("array->", arr);
    maxReach = Math.max(maxReach, arr[i]);
    console.log("max reach", maxReach);
    steps--;
    // if the index is the last index - return jumps
    if ((i = arr.length - 1)) {
      return jumps;
    }
  }
};

module.exports = minJumps;
