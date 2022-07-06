import { shuffleOne, rejoinWords, scrambleWords } from "../../utils/scramble";

describe("shuffleOne function", () => {
  it("should return string with first and last characters unmoved", () => {
    // Mock
    const wordArray = ["n", "e", "f", "a", "r", "i", "o", "u", "s"];
    const idxLast = wordArray.length - 1;
    // Execute
    const shuffledWord = shuffleOne(wordArray);

    // Assert
    expect(shuffledWord[0]).toBe("n");
    expect(shuffledWord[idxLast]).toBe("s");
  });
});

describe("rejoinWords function", () => {
  it("should place unscrambled words back into original positions", () => {
    // Mock
    const shuffledStrings = ["cdoe", "elxpinas", "cmoetmns", "cpuetomr"];
    const inserts = [
      {
        item: "The",
        pos: 0,
      },
      {
        item: "the",
        pos: 3,
      },
      {
        item: "to",
        pos: 5,
      },
      {
        item: "the",
        pos: 6,
      },
    ];
    // Execute
    const result = rejoinWords(shuffledStrings, inserts);
    // Assert
    expect(result[0]).toBe("The");
    expect(result[1]).toBe("cdoe");
    expect(result[2]).toBe("elxpinas");
    expect(result[3]).toBe("the");
    expect(result[4]).toBe("cmoetmns");
    expect(result[5]).toBe("to");
    expect(result[6]).toBe("the");
    expect(result[7]).toBe("cpuetomr");
  });
});

describe("main function scrambleWords", () => {
  it("throws length error @ utils -> scramble -> scrambleWords", () => {
    const inputSentence = "Rmemeber your wentir jaeckt";
    const lengthErrCase = "No way no how mister man no no"
    const functionReturn = scrambleWords(inputSentence);
    const split = functionReturn.split(" ")

    expect(split.length).toBeLessThan(6);
    expect(() => scrambleWords(lengthErrCase)).toThrow(/[Length]/)

  });

  it("won't return with more than one intermittent space", () => {
    
  });
});
