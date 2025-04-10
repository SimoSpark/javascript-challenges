function secondHighest(arr) {
  // Set in JavaScript is a special object that stores only unique values!
  const unique = [...new Set(arr)]; //This uses the spread operator ... to turn the Set back into an array.
  if (unique.length < 2) return null;
  unique.sort((a, b) => b - a);//sort descending (big to small)
  return unique[1];
}
//

function handleClick() {
  const input = document.getElementById("numberInput").value;
  const numArray = input
    .split(",")
    .map(n => parseInt(n.trim()))// parseInt : turns it to number & trim : removes space ' 5' => '5'
    .filter(n => !isNaN(n));//is not a number 

  const result = secondHighest(numArray);
  document.getElementById("res").textContent =
    result !== null ? `Second highest number is: ${result}` : "Not enough unique numbers!";
}
