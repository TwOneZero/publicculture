const cultureEvent = require('../middlewares/cultureEvent');

exports.getEvent = async (req, res, next) => {
  await cultureEvent((err, { result } = {}) => {
    if (err) {
      return res.send('callback Error!');
    }
    try {
      console.log(result.culturalEventInfo);
      return res.send(result.culturalEventInfo);
      //req.body.title 폼을 만들어서 리스트에서 검색가능 하게 만든다.
    } catch (error) {
      next(error);
    }
  });
};
