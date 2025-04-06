function secondHighest(arr) {
  const unique = [...new Set(arr)];
  if (unique.length < 2) return null;
  unique.sort((a, b) => b - a);
  return unique[1];
}

function handleClick() {
  const input = document.getElementById("numberInput").value;
  const numArray = input
    .split(",")
    .map(n => parseInt(n.trim()))
    .filter(n => !isNaN(n));

  const result = secondHighest(numArray);
  document.getElementById("result").textContent =
    result !== null ? `Second highest number is: ${result}` : "Not enough unique numbers!";
}
