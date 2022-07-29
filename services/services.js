import axios from "axios";

const APIkeyThesaurus = "46e64080-db6e-4eef-97e2-d2bfe8adf722";
const APIkeySchool = "91aa4234-20db-426c-bfa7-0832e6d0d4e0";
const word = "onion";

export const getData = async () => {
  return axios.get(
    `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${APIkeyThesaurus}`
  );
};
