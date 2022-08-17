const SerpApi = require('google-search-results-nodejs');
const googleSearchAPI = process.env.GOOGLE_SEARCH_KEY;

exports.googleSearch = async (parameter, cb) => {
  try {
    const search = new SerpApi.GoogleSearch(googleSearchAPI);
    parameter.engine = 'google_maps';
    parameter.type = 'search';
    parameter.hl = 'ko';
    search.json(parameter, (data) => {
      if (!data) {
        return cb(new Error('검색 데이터가 없습니다.'), null);
      }
      return cb(null, data);
    });
  } catch (error) {
    return cb(error, null);
  }
};
