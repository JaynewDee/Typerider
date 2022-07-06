const { Schema, model } = require("mongoose");

const sentenceSchema = new Schema({
  sentence: {
    type: String,
    trim: true,
    required: true,
  },
});

const Sentence = model("Sentence", sentenceSchema);

module.exports = Sentence;
