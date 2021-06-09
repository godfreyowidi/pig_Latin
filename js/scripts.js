function pigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  }

  let editedWord = word
  let firstCharacter = editedWord.charAt(0)

  return word.slice(1) + firstCharacter + "ay"
}
