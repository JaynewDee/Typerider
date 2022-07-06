const db = require("./connection");
const Sentence = require("../models/Sentence");
const sentenceSeeds = require("./sentenceSeeds.json");

db.once("open", async () => {
  try {
    await Sentence.create(sentenceSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Sentence seeding successful`);
  process.exit(0);
});
