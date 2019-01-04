/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let count = 0;
  let newNum = num.toString();
  for (let i = 0; i < newNum.length; i++) {
    count = parseInt(newNum[i]) + count
  }
  if (count < 10) {
    return count
  } else {
    return addDigits(count)
  }
};

console.log(addDigits(38))