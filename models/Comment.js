const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  role: {
    type: String
  },
  avatar: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  replies: {
    type: String
  },
  likes: {
    type: String
  },
  unlike: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);
