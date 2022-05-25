const { Post } = require('../schemas/Post');

const cultureEvent = require('../middlewares/cultureEvent');

// //모든 post 가져오기
// exports.getAllPost = async (req, res, next) => {
//   //client 에서 searchInput 에 카테고리 검색을 담는다.
//   await cultureEvent(req.body.searchInput, (err, { result } = {}) => {
//     if (err) {
//       return res.send('callback Error!');
//     }
//     try {
//       //row 안에 배열 들어있음
//       console.log(result.culturalEventInfo);
//       return res.json(result.culturalEventInfo.row);
//     } catch (error) {
//       next(error);
//     }
//   });
// };

//post 저장
exports.storePost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
  } catch (error) {}
};
