function countVowels(str) {
    const vowels = 'aeiou';
    return str
      .toLowerCase()
      .split('')
      .filter(v => vowels.includes(v)).length;
  }
console.log(countVowels("heowiw"))  