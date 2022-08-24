const { Comment } = require('../schemas/Comment');
const { Post } = require('../schemas/Post');
const mongoose = require('mongoose');

//댓글 달기
exports.addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!req.user) {
      return res.status(404).json({ message: '유저 정보가 필요합니다' });
    }
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(404).send('post 가져오기 에러');
    }
    //comment 인스턴스
    const comment = new Comment({
      userId: req.user._id,
      //post ObjectId
      post: postId,
      //client form 에서 comment field 로 넘겨주기
      body: req.body.comment,
    });

    const post = await Post.findOneAndUpdate(
      postId,
      { comment: comment },
      { new: true }
    ).then(() => {
      console.log('post저장 성공');
    });

    //comment db에 저장
    comment.save((err, info) => {
      if (err) return res.json({ success: false, err });
      console.log('comment 저장 성공');
      return res.status(200).json({
        success: true,
        info,
      });
    });
  } catch (error) {
    return res.status(500).json({ message: 'addcomment Error', error });
  }
};

//댓글 조회
exports.getCommets = async (req, res) => {
  try {
  } catch (error) {}
};
