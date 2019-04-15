const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: String
  },
  {
    timestampes: true // created/updated at fields
  }
);

module.exports = mongoose.model("Note", NoteSchema);
