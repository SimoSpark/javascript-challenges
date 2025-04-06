function secondHighest(arr) {
    const unique = [...new Set(arr)];
  
    if (unique.length < 2) return null;
  
    unique.sort((a, b) => b - a);
  
    return unique[1];
  }
  const result = secondHighest([1, 3, 7, 8, 10, 16, 19, 25,33]);
  console.log("Second Highest:", result); // ➡️ 19
  