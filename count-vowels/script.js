//vowels a,e,i,o,u
const example = "hello world";
const t = example.split('');
let num = 0;

for (let i = 0; i < t.length; i++) {
  if (t[i] === "a" || t[i] === "e" || t[i] === "i" || t[i] === "o" || t[i] === "u") {
    num++;
  }
}

console.log(num); 
