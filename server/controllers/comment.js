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

//댓글 가져오기
exports.getComments = async (req, res, next) => {
  try {
    const { postId } = req.params;
    let comments = await Comment.find()
      .populate('userId')
      .then((data) => {
        return data.filter((d) => String(d.post) === postId);
      });
    return res.json({ comments });
  } catch (error) {
    next(error);
  }
};

//댓글 삭제
exports.deleteComment = async (req, res, next) => {
  try {
    // Auth - 유저 정보 가져오기
    const userId = req.user._id;
    if (!userId) {
      return res
        .status(500)
        .json({ success: false, message: '유저 정보가 없습니다.' });
    }
    //해당 코멘트 정보
    const { commentId } = req.params;
    //코멘트의 유저 정보랑 일치하는 지 확인
    const checkUser = await Comment.findById({ _id: commentId }).populate(
      'userId'
    );
    console.log(checkUser); //콘솔테스트
    if (checkUser.userId._id !== userId) {
      return res
        .status(400)
        .json({ message: 'user 정보가 일치하지 않습니다. 댓글 삭제 실패' });
    }

    // 코멘트 삭제
    const updatedComment = await Comment.findByIdAndDelete({ _id: commentId });
    console.log(updatedComment); //콘솔테스트
    return res.status(200).json({ success: false, updatedComment });
  } catch (err) {
    return res.status(400).json({ success: false, err });
  }
};
