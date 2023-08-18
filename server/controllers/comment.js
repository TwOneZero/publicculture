const { Comment } = require('../schemas/Comment');
const { Post } = require('../schemas/Post');
const mongoose = require('mongoose');
const { getCurrentTime } = require('../utils/time');

//댓글 달기
exports.addComment = async (req, res, next) => {
  try {
    const { postId } = req.params;
    if (!req.user) {
      return res
        .status(404)
        .json({ success: false, message: '유저 정보가 필요합니다' });
    }
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res
        .status(404)
        .json({ success: false, message: 'post 가져오기 에러' });
    }

    await Post.findByIdAndUpdate(postId, {
      $inc: { comments_length: 1 },
    });
    let createdTime = getCurrentTime();
    //comment 인스턴스
    const comment = new Comment({
      userId: req.user._id,
      //post ObjectId
      post: postId,
      //client form 에서 comment field 로 넘겨주기
      body: req.body.comment,
      createdAt: createdTime,
    });

    //comment db에 저장
    comment.save((err, info) => {
      if (err) return res.json({ success: false, message: err });
      console.log('comment 저장 성공');
      return res.status(200).json({
        success: true,
        info,
        name: req.user.name,
      });
    });
  } catch (error) {
    next(error);
  }
};

//댓글 가져오기
exports.getPostComments = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find()
      .populate('userId')
      .then((data) => {
        return data.filter((d) => String(d.post) === postId);
      });
    const allComments = comments.map((comment) => {
      return {
        commentId: comment._id,
        name: comment.userId.name,
        body: comment.body,
        createdAt: comment.createdAt,
      };
    });
    return res.status(200).json({ success: true, allComments });
  } catch (error) {
    next(error);
  }
};

//나의 모든 댓글 가져오기
exports.getMyComments = async (req, res, next) => {
  try {
    const myComments = await Comment.find({ userId: req.user._id })
      .exec()
      .catch(() => {
        return res
          .status(500)
          .json({ success: false, message: '내 comment 가져오기 실패' });
      });
    return res.status(200).json({ success: true, myComments });
  } catch (error) {
    next(error);
  }
};

//댓글 삭제
exports.deleteComment = async (req, res, next) => {
  try {
    //해당 코멘트 정보
    const { commentId, postId } = req.params;

    // 코멘트 삭제
    const deletedComment = await Comment.findByIdAndDelete({ _id: commentId });
    await Post.findByIdAndUpdate(postId, {
      $inc: { comments_length: -1 },
    });
    return res.status(200).json({ success: true, deletedComment });
  } catch (err) {
    next(err);
  }
};
