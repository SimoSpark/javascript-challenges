// FizzBuzz challenge with a twist:
// Print numbers from 1 to n, replacing multiples of 3 with "Fizz", 5 with "Buzz", and both with "FizzBuzz".
// The results are pushed into an array and returned.

function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz"); 
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    return result;
  }
  
  console.log(fizzBuzz(15));
  