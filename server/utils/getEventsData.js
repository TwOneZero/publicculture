const axios = require('axios');

const getEventsData = async (searchInput = '', cb) => {
  const url = 'http://openapi.seoul.go.kr:8088/';

  let serviceKey = process.env.EVENT_URI;

  let pathVariables = serviceKey;
  pathVariables += '/' + encodeURIComponent('json');
  pathVariables += '/' + encodeURIComponent('culturalEventInfo');
  pathVariables += '/' + encodeURIComponent('2001');
  pathVariables += '/' + encodeURIComponent('3000');

  //최종 검색 url
  const fullUrl = url + pathVariables + '/' + encodeURIComponent(searchInput);

  try {
    const json = await axios.get(fullUrl); //api 주소 요청
    cb(undefined, { result: json.data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getEventsData;
