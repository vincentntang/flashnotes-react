const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DocumentSchema = new Schema(
  {
    title: {
      type: String
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

module.exports = Note = mongoose.model("documents", DocumentSchema);
