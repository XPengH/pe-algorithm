/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let chunkArr = nums.slice(nums.length - k, nums.length);
  let chunkArrA = nums.slice(0, nums.length - k);
  for(let i =0; i< chunkArrA.length; i++) {
    chunkArr.push(chunkArrA[i])
  }
  return chunkArr;
};

const arr = [1,2,3,4,5,6,7];
const k = 3;
console.log(rotate(arr, k));