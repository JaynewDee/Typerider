import axios from "axios";

export const fetchSentence = async (
  url: string,
  counter: number
): Promise<any> => {
  return await axios
    .get(url + counter)
    .then(({ data }) => data.data.sentence.toLowerCase());
};
