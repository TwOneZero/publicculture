const { post } = require('../routes/post');
const { Post } = require('../schemas/Post');

//모든 post 가져오기
exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ messege: error });
  }
};

//검색으로 가져오기
exports.getPostBySearch = async (req, res) => {
  //req.query로 해야함
  const { search } = req.query;
  try {
    //db에서 검색한 문자열이 포함된 title 이나 codename 가져오기
    const posts = await Post.find({
      codename: { $regex: search },
    });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};
