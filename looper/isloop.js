'use strict';

//1. have edge cases done -> if the head is null - return false
//2. create the pointer - slow & fast
//3. fast pointer exists && is on the next node
//4. slow one moves by 1 node and t fast one - by 2
//5. see if the slow and fast met - return true
//6. otherwise --> false



//Complete this algo
const isLoop = (linkedlist) => {
    let slow = linkedlist.head;
    let fast = linkedlist.head;

  while (fast && fast.next) {
      slow = slow.next;
      
      fast = fast.next.next;
      if (slow === fast) {
          return true;
      }
  }
return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop