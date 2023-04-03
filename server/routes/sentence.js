const router = require("express").Router();
const Sentence = require("../models/Sentence");

router.get("/one", async (req, res) => {
  try {
    const sentence = await Sentence.find({});
    console.log(`Line 9 sentence.js back-end ` + sentence);
    return res.json(sentence);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
