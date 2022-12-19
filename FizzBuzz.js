/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let output = [];

  for (let i = 1; i <= n; i++) {
    let response = "";

    if (i % 3 === 0) {
      response += "Fizz";
    }

    if (i % 5 === 0) {
      response += "Buzz";
    }

    if (response === "") {
      response += i;
    }

    output.push(response);
  }

  return output;
};
