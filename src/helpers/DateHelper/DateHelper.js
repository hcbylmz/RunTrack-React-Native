export default function DateHelper() {
  const date = new Date();
  let [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 11) {
    month = month + 1;
    month = '0' + month;
  }

  let nowTime = new Date().toLocaleTimeString();
  return {day, month, year, nowTime};
}
