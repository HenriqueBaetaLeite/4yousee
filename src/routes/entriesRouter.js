const entriesRouter = require("express").Router();
const { getSpecificWord, favoriteWord } = require("../controller/entriesController");

entriesRouter.get("/:word", getSpecificWord);
entriesRouter.post("/:word/favorite", favoriteWord);

module.exports = entriesRouter;
