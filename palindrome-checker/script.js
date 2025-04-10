function palindrome(test) {
    const cleaned = test.toLowerCase().replace(/[^a-z0-9]/g, '');// match everything that is NOT a letter or number( removes spaces , punctuation or special characters)
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed ? "Palindrome" : "Not a palindrome";
  }
  function checkPalindrome(){
    const input=document.getElementById("textInput").value;
    const result = palindrome(input);
    document.getElementById("result").textContent=
    `${result}`
  
  }