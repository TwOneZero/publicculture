const { Post } = require('../schemas/Post');

const getEventsData = require('../utils/getEventsData');

//한번만 쓰는 라우터
//공공데이터 post db에 저장
exports.storeAllPost = async (req, res, next) => {
  try {
    await getEventsData(req.body.searchInput, (err, { result } = {}) => {
      if (err) {
        return res.send('callback Error!');
      }
      //row 안에 배열 들어있음
      result.culturalEventInfo.row.forEach(async (event) => {
        const post = new Post({
          codename: event.CODENAME,
          guname: event.GUNAME,
          title: event.TITLE,
          date: event.DATE,
          place: event.PLACE,
          org_name: event.ORG_NAME,
          use_trgt: event.USE_TRGT,
          use_fee: event.USE_FEE,
          player: event.PLAYER,
          program: event.PROGRAM,
          etc_desc: event.ETC_DESC,
          org_link: event.ORG_LINK,
          main_img: event.MAIN_IMG,
          rgstdate: event.RGSTDATE,
          ticket: event.TICKET,
          strtdate: event.STRTDATE,
          end_date: event.END_DATE,
          themecode: event.THEMECODE,
        });
        await post.save();
      });
      return res.json(result.culturalEventInfo.row);
    });
  } catch (error) {
    next(error);
  }
};
