import axios from "axios";

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
        "Content-Type": "application/json"
      }
    }).then((sentences) => sentences.json());
  } catch (err) {
    console.log(err);
  }
};
