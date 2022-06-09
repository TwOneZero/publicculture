const { Comment } = require('../schemas/Comment');
const mongoose = require('mongoose');

//댓글 달기
exports.addComment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.user) {
      return res.status(404).json({ message: 'Invaild credential' });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No post with that id');
    }
    //comment 인스턴스
    const comment = new Comment({
      userId: req.user,
      //post ObjectId
      post: id,
      //client form 에서 comment field 로 넘겨주기
      body: req.body.comment,
    });

    //comment db에 저장
    await comment.save((err, info) => {
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
