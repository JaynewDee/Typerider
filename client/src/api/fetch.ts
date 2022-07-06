import axios from "axios";

const oneDino = "https://dinoipsum.com/api/?format=json&words=1&paragraphs=1";
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
    .then((res) => console.log(res));
};
