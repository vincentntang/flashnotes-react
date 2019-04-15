const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DeckSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  },
  {
    timestamps: true
  }
);

module.exports = User = mongoose.model("decks", DeckSchema);
