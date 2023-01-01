//space complexity O(n log(n))
// time complexity O(1)

function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  console.log(array);
  let left = 0;
  let right = array.length - 1;
  console.log(right);

  while (left < right) {
    let currentSum = array[left] + array[right];
    console.log(currentSum);
    if (currentSum == targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return [];
}
