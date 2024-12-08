const { getWord } = require("../service/entriesService");

const getSpecificWord = async (req, res) => {
  const { word } = req.params; 
  const result = await getWord(word);
  res.status(200).json(result);
};

const favoriteWord = (req, res) => {
  res.status(200).json("yes");
}

module.exports = {
  getSpecificWord,
  favoriteWord,
};
