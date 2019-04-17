const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CardSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    deck: {
      type: Schema.Types.ObjectId,
      ref: "decks"
    },
    difficulty: {
      type: Number,
      required: true
    },
    daysBetweenReviews: {
      type: Number,
      required: true
    },
    dateLastReviewed: {
      type: Date
    },
    note: {
      type: Schema.Types.ObjectId,
      ref: "notes"
    }
  },
  {
    timestamps: true
  }
);

module.exports = Card = mongoose.model("cards", CardSchema);
