const router = require("express").Router();
const Sentence = require("../models/Sentence");
const db = require("../db/connection");
router.get("/one", async (req, res) => {
  await Sentence.find({}).then(async (sentences, err) => {
    if (err) throw err;
    res.json(sentences);
  });
});

module.exports = router;
