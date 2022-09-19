const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  //comment 내용
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = { Comment };
