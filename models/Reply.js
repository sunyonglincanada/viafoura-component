const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  comment_id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Comment = mongoose.model('reply', ReplySchema);
