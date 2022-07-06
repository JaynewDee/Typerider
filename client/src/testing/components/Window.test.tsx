/* eslint-disable jest/no-conditional-expect */
import { fetchSentence } from "../../api/fetch";
import "@testing-library/jest-dom";

const mockUrl = `https://api.hatchways.io/assessment/sentences/`;
const counter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("window component", () => {
  test("fetches first sentence", async () => {
    const data = await fetchSentence(mockUrl, counter[1]);
    expect(data).toBe("i love learning code");
    const properLength = data.split(" ");
    expect(properLength.length).toBeLessThan(6);
  });

  test("fetches fifth sentence", async () => {
    const data = await fetchSentence(mockUrl, counter[5]);
    expect(data).toBe("refridgerator");
    const properLength = data.split(" ");
    expect(properLength.length).toBeLessThan(6);
  });

  test("fetch failure", async () => {
    try {
      await fetchSentence(mockUrl, counter[1]);
    } catch (e) {
      expect.assertions(1);
      expect(e).toMatch("error");
    }
  });
});
