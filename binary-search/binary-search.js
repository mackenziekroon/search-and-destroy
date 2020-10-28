"use strict";

// edge case - if array is empty return false

//1. if/else checking is the array is empty, if so, return false
//2. pick a midpoint in the array and split the array at that point
//3. search the first array for the target
//4. if we find it - return true
//5. if we don't find it - then we search the second array
// repeat step 4
//6. if we don't find it - return false

// [1,3,4,5,10,15,20,22,23,98,1000];

// Complete this algo
const binarySearch = (array, target) => {
  // console.log("ARRAY->", array);
  if (array.length === 0) {
    return false;
  }
  let midpoint = Math.floor(array.length / 2);
  // console.log("midpoint index--->", midpoint);
  // console.log("the midpoint of the array", array[midpoint]);
  if (target < array[midpoint]) {
    for (let i = 0; i < array[midpoint]; i++) {
      // console.log("1. i-->", i);
      if (array[i] === target) {
        // console.log("1. array[i]-->", array[i]);
        return true;
      }
    }
  } else if (target >= array[midpoint]) {
    for (let i = midpoint; i < array.length; i++) {
      // console.log("2. i-->", i);
      if (array[i] === target) {
        return true;
      }
    }
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
