export const getFormatedTime = () => {
  const { year, month, today, hours, minutes, seconds } = makeRealTime();
  return `${year}-${month + 1}-${today} ${hours}:${minutes}:${seconds}`;
};

export const makeRealTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { year, month, today, hours, minutes, seconds };
};
