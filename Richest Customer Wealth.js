/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let customer = accounts[i];
    let sum = 0;
    for (let j = 0; j < customer.length; j++) {
      console.log(customer[j]);
      sum = sum + customer[j];
    }
    max = Math.max(max, sum);
  }
  return max;
};
