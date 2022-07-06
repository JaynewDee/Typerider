function withSpaces(words: string[]) {
  return words.map((word: string) => {
    let wordArr = word.split("");
    if (words.indexOf(word) !== words.length - 1) {
      wordArr.push(" ");
    }
    let spaced = wordArr.join("");
    return spaced;
  });
}

export { withSpaces };
