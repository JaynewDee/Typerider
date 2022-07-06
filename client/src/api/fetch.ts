import axios from "axios";
import { createECDH } from "crypto";

const oneDino = "https://dinoipsum.com/api/?format=json&words=1&paragraphs=1";
const hipSet = "https://hipsum.co/api/?type=hipster-centric&sentences=1";
export const fetchSentence = async (
  url: string,
  counter: number
): Promise<any> => {
  return await axios
    .get(url + counter)
    .then(({ data }) => data.data.sentence.toLowerCase());
};

export const fetchDino = async (): Promise<any> => {
  return await axios
    .get(oneDino)
    .then(({ data }) => data)
    .then((res) => res[0][0]);
};

export const fetchHipsum = async (): Promise<any> => {
  return await axios.get(hipSet).then((data) => data.data[0]);
};

export const getOneSentence = async (): Promise<any> => {
  try {
    return await fetch("/sentence/one", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((sentence) => sentence.json())
      .then((json) => json);
  } catch (err) {
    console.log(err);
  }
};

export const getDictionary = async (word: string): Promise<any> => {
  try {
    return await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(({ data }) => data[0].meanings[0].definitions[0].definition);
  } catch (err) {
    console.error(err);
  }
};
