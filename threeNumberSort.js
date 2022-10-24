// You're given an array of integers and another 
// array of three disctinct integers. The first array
// is guaranteed to only contain integers in the first
// array. For example, a second array of [x, y, z] 
// represents a desired order of 
// [x, x, ..., x, y, y,..., y, z, z, ..., z] in the 
// first array. 

// Write a function that sorts the first array 
// according to the desired order in the second array.

// The function should perform this in place(i.e., 
// it should mutate the input array), and it shouldn't
// use any auxiliary space(i.e., it should run in 
// constant space: O(1) space).

// Note that the desired order won't necessarily be
// ascending or descending and that the first array wont
// necessarily contain all three integers found in
// the second array--it might only contain one or two.

// Sample input: array = [1, 0, 0, -1, -1, 0, 1, 1]
//              order = [0, 1, -1]

// Sample output: res = [0, 0, 0, 1, 1, 1, -1, -1]

//naive approach: We can do a nested for loop to 
//check whether the index of the order is equal to 
//the index of the array.  If so, we use a helper
//function to swap those two values' places. We then
//just return the array.

//The helper function will take in an index1, index2 
//and the array those come from. Then we can say 
//index1, index2 = index2, index1;


//O(n) time | O(1) space complexity

function threeNumberSort(array, order) {
  const valueCounts = [0, 0, 0];

  for (const element of array) {
    const orderIdx = order.indexOf(element);
    valueCounts[orderIdx]++;
  }

  for(let idx = 0; idx < 3; idx++) {
    const value = order[idx];
    const count = valueCounts[idx];

    const numElementBefore = valueCounts.slice(0, idx).reduce((a, b) => a + b, 0);
    for(let n = 0; n < count; n++) {
      const currentIdx = numElementBefore + n;
      array[currentIdx] = value;
    }
  }

  return array;
}

// function threeNumberSort(arr, order) {
//   let pointer = 0;
//   for(let i = 0; i < order.length; i++) {
//     for(let j = pointer; j < arr.length; j++) {
//       if(arr[j] === order[i]){
//         swap(pointer, j, arr);
//         pointer++;
//       }
//     }
//   }
//   return arr;
// }

// function swap(i1, i2, arr) {
//   [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
// }