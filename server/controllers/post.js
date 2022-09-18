const { Post } = require('../schemas/Post');
const dayjs = require('dayjs');
const mongoose = require('mongoose');
const { googleSearch } = require('../utils/googleSearch');

//랜덤 post 가져오기
exports.getRandomPost = async (req, res) => {
  const limitrecords = 20;

  //랜덤한 수
  function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  //날짜 포맷 설정
  let today = dayjs();
  let d_t = today.format('YYYY-MM-DD h:mm:ss');
  //현재 날짜에서 종료일이 더 후인 행사 return
  try {
    const posts = await Post.find({ end_date: { $gte: d_t } });
    let randPick = getRandomArbitrary(1, posts.length - limitrecords);
    //slicedPost 길이 => 랜덤수 ~ 랜덤수 + 20 (최대 : posts.length)
    const slicedPost = posts.slice(randPick, randPick + limitrecords);
    return res
      .status(200)
      .json({ success: true, len: slicedPost.length, posts: slicedPost });
  } catch (error) {
    return res.status(404).json({ message: error });
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
        { guname: { $regex: searchRegex } },
        { place: { $regex: searchRegex } },
      ],
    }).exec();
    return res.status(200).json({ success: true, posts });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

//디테일 페이지에서 사용 params 로  post._id 값을 id 로 넘겨주면 됨
exports.getPostDetails = async (req, res) => {
  const { id } = req.params;
  try {
    //db id 로 가져옴
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'No post with that id' });
    }
    const post = await Post.findById(id);
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

// 좋아요
exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.user) {
      return res.status(404).json({ message: '로그인이 필요합니다.' });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'No post with that id' });
    }
    const post = await Post.findById(id).exec();
    //post에 like를 눌렀나 ( req.user._id ( ObjectId -> String ))
    const index = post.likes.findIndex((id) => id === String(req.user._id));
    //-1 이면 안누른 거임
    if (index === -1) {
      //like the post ( 배열에 push )
      post.likes.push(req.user._id);
    } else {
      //dislike ( 내 아이디를 찾아서 삭제)
      post.likes = post.likes.filter((id) => id !== String(req.user._id));
    }
    //새로 업데이트
    const updatedPost = await Post.findByIdAndUpdate(id, post, {
      new: true,
    });
    //업데이트 된 post 와 likes 수 반환
    return res
      .status(200)
      .json({ success: true, updatedPost, likes: post.likes.length });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

//관심행사 가져오기
exports.getFavPost = async (req, res) => {
  try {
    //모든 포스트 가져오기
    const posts = await Post.find({}).exec();
    //user id 와 일치하는 배열 filtering
    let likedPost = posts.filter((arr) => {
      return arr.likes.find((id) => id === String(req.user._id));
    });
    return res.json({ success: true, myFavPost: likedPost });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

exports.getPostDateCount = async (req, res) => {
  let today = dayjs()
    .startOf('month')
    .set('month', 9)
    .set('year', 2022)
    .format('YYYY-MM-DD HH:mm:ss');
  let prevMonth = dayjs()
    .startOf('month')
    .set('month', 8)
    .set('year', 2022)
    .format('YYYY-MM-DD HH:mm:ss');
  console.log(today);
  try {
    const postAll = await Post.find({
      end_date: { $lte: today, $gte: prevMonth },
    }).exec();
    return res.status(200).json({ postAll, count: postAll.length });
    // await Post.find({ end_date: {$gte: d_t }}).then((post) => {
    //   return res.status(200).json({ count: post.length});
    // });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

// 구글 search
exports.searchMap = async (req, res) => {
  try {
    const { q } = req.body;
    let parameter = {
      q,
    };
    googleSearch(parameter, (err, data) => {
      if (err) {
        res.json({ err });
      }
      return res.json({ success: true, data });
    });
  } catch (error) {
    return res.json({ message: error });
  }
};
