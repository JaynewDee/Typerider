import axios from "axios";

export const getOneSentence = async (): Promise<any> => {
  return await axios
    .get("/sentence/one")
    .then(async (response) => {
      console.log(response);
    })
    .catch((err) => console.error(err));
};
