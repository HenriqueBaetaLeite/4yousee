const axios = require("axios");

const getWord = async (word) => {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const [result] = await axios
    .get(url + word)
    .then((response) => response.data)
    .catch((error) => error);

  return result;
};

module.exports = {
  getWord,
};
