const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  codename: String,
  guname: String,
  title: String,
  date: String,
  place: String,
  org_name: String,
  use_trgt: String,
  use_fee: String,
  player: String,
  program: String,
  etc_desc: String,
  org_link: String,
  main_img: String,
  rgstdate: String,
  ticket: String,
  strtdate: String,
  end_date: String,
  themecode: String,

  comment: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  likes: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});

const Post = mongoose.model('Post', postSchema);
module.exports = { Post };
