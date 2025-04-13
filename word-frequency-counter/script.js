const sentence = "I love code and learning and love code";
const words = sentence.toLowerCase().split(' ');
const wordCount = {};

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
}

console.log(wordCount);
