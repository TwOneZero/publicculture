const { Post } = require('../schemas/Post');
const mongoose = require('mongoose');

//모든 post 가져오기
exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ messege: error });
  }
};

//검색으로 가져오기 ( title  or  codename  다 됨)
exports.getPostBySearch = async (req, res) => {
  //req.query로 해야함
  const { search } = req.query;
  //-> /.* 무용 .*/
  const regex = (pattern) => new RegExp(`.*${pattern}.*`);
  const searchRegex = regex(search);
  try {
    //db에서 검색한 문자열이 포함된 title 이나 codename 가져오기
    const posts = await Post.find({
      $or: [
        { codename: { $regex: searchRegex } },
        { title: { $regex: searchRegex } },
      ],
    }).exec();
    res.status(200).json({ message: 'success', posts });
  } catch (error) {
    res.status(404).json({ message: 'failed to find posts', error });
  }
};

//디테일 페이지에서 사용 params 로  post._id 값을 id 로 넘겨주면 됨
exports.getPostDetails = async (req, res) => {
  //db id 로 가져옴
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No post with that id');
    }
    const post = Post.findById(id).exec();
    return res.status(200).json({ message: 'success', post });
  } catch (error) {
    return res.status(404).json({ message: 'failed to find posts', error });
  }
};

// 좋아요
exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.user) {
      return res.status(404).json({ message: 'Invaild credential' });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No post with that id');
    }
    const post = await Post.findById(id).exec();
    //post에 like를 눌렀나 ( req.userId ( ObjectId -> String ))
    const index = post.likes.findIndex((id) => id === String(req.userId));
    //-1 이면 안누른 거임
    if (index === -1) {
      //like the post ( 배열에 push )
      post.likes.push(req.userId);
    } else {
      //dislike ( 내 아이디를 찾아서 삭제)
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    //새로 업데이트
    const updatedPost = await Post.findByIdAndUpdate(id, post, {
      new: true,
    });
    //업데이트 된 post 와 likes 수 반환
    return res.status(200).json({ updatedPost, likes: post.likes.length });
  } catch (error) {}
};
