const axios = require('axios');
const SERVICE_KEY = require('../config/apiKeys/key');

const cultureEvent = async (searchInput = '', cb) => {
  const url = 'http://openapi.seoul.go.kr:8088/';

  let serviceKey = SERVICE_KEY.eventURI;

  let pathVariables = serviceKey;
  pathVariables += '/' + encodeURIComponent('json');
  pathVariables += '/' + encodeURIComponent('culturalEventInfo');
  pathVariables += '/' + encodeURIComponent('1');
  pathVariables += '/' + encodeURIComponent('100');

  const fullUrl = url + pathVariables + '/' + encodeURIComponent(searchInput);

  try {
    const json = await axios.get(fullUrl); //api 주소 요청
    cb(undefined, { result: json.data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = cultureEvent;
