const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NoteSchema = new Schema(
  {
    title: {
      type: String
    },
    text: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    document: {
      type: Schema.Types.ObjectId,
      ref: "documents"
    }
  },
  {
    timestamps: true
  }
);

module.exports = Note = mongoose.model("notes", NoteSchema);
