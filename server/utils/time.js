exports.getCurrentTime = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let today = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return `${year}-${month + 1}-${today} ${hours}:${minutes}:${seconds}`;
};
