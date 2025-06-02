function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let wordArray: string[] = [];

  let vowelIndicies: number[] = [];

  let vowelChar: string[] = [];

  for (let i = 0; i < s.length; i++) {
    wordArray.push(s[i]);
  }

  for (let i = 0; i < wordArray.length; i++) {
    if (vowels.includes(wordArray[i])) {
      vowelIndicies.push(i);
      vowelChar.push(wordArray[i]);
    }
  }

  for(let i = 0; i < wordArray.length; i++){
    wordArray[vowelIndicies[i]] = vowelChar[vowelChar.length - 1 - i];
  }

  console.log(vowelIndicies);
  console.log(vowelChar);

  return wordArray.join("");
}

console.log(reverseVowels("IceCreAm"));
