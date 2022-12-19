// test case 1
// nums = [2, 7, 11, 15];
// target = 9;

// test case 2
// nums = [3, 2, 4];
// target = 6;

// test case 3
// nums = [3, 3];
// target = 6;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

number = [];
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        number[0] = i;
        number[1] = j;
        return number;
      }
    }
  }
};

const ans = twoSum(nums, target);
console.log(ans);
