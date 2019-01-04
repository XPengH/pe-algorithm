const nums = [-1, 0, 1, 2, -1, -4]
let resnum = 0
let resultArr = []
var getTwoMember = function (flag, result) {
  for (let i = 0; i< nums.length; i++) {
    if (i!==flag) {
      // 开始找第二个值
      for (let j = i +1; j < nums.length; j++) {
        if (j!==flag && (nums[i] + nums[j]) === result) {
          let end = [-result, nums[i], nums[j]].sort()
          resultArr.push(end)
        }
      }
    }
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // 以一个值为结果，从剩下的数组中取两个值与其相等即可
  for (let i = 0; i<nums.length; i++) {
    let result = resnum - nums[i]
    getTwoMember()
  }
  // 去重
  return Array.from(new Set(resultArr))
};