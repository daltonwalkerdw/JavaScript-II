// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr))

}
function itemlength(arr) {
  return arr.length;
}

getLength(items, itemlength); // end 1

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(cb(arr))
}

function lastitem(arr){
for(var i = 0; i < arr.length; i++){
  return arr[3]
 }
}

last(items, lastitem) // end 2

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
   console.log(cb(sum))
};

function callBackSum(sum){
  return sum;
};

sumNums(4,6,callBackSum);

function multiplyNums(x, y, cb) {
  let muliplysum = x * y;
  console.log(cb(muliplysum))
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function callbackmulti(multisum){
  return multisum;
}

multiplyNums(10,10,callbackmulti)

var array = [7,7,4,5,6,6]

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
if(list.includes(item)){
  return cb()
}else{
  return console.log(false)
}

 
}

function checksiftrue(){
  console.log(true);
}

contains(5, array, checksiftrue)
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
