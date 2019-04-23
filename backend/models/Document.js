const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DocumentSchema = new Schema(
  {
    title: {
      type: String,
    },
    pinned: {
      type: Boolean,
      default: false
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

module.exports = Document = mongoose.model("documents", DocumentSchema);
