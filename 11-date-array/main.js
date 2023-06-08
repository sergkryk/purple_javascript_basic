const parsed = [
  "10-02-2022",
  "test",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "13.13.1990",
  "30/02/2020",
  "30/02/test",
  "31.04.2023",
  "02/29/1996",
  "29/02/1998",
];

function isDay(day) {
  return day > 0 && day <= 31;
}
function isMonth(month) {
  return month > 0 && month <= 12;
}
function isYear(year) {
  return year > 0 && year <= 2023;
}
function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function isValidDate(string) {
  if (string.split("-").length === 3) {
    const [day, month, year] = string.split("-");
    return [Number(day), Number(month), Number(year)];
  } else if (string.split("/").length === 3) {
    const [month, day, year] = string.split("/");
    return [Number(day), Number(month), Number(year)];
  } else {
    return null;
  }
}

function formatDate(arr) {
  let [day, month, year] = arr;

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  return `${day}.${month}.${year}`;
}

const monthsHaving30days = [4, 6, 9, 11];

const dates = parsed.reduce((acc, stringToCheck) => {
  if (!isValidDate(stringToCheck)) {
    return acc;
  }

  let [day, month, year] = isValidDate(stringToCheck);

  if (isDay(day) && isMonth(month) && isYear(year)) {
    const isLeap = isLeapYear(year);
    const isShortMonth = monthsHaving30days.includes(month);

    if (day === 31 && isShortMonth) {
      return acc;
    }

    if (day > 29 && month === 2) {
      return acc;
    }

    if (day === 29 && month === 2 && !isLeap) {
      return acc;
    }
    
    acc.push(formatDate([day, month, year]));
    return acc;
  }
  return acc;
}, []);

console.log(dates);
