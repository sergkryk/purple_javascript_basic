const parsed = ["10-02-2022", "test", "11/12/2023", "00/13/2022", "41/12/2023", '13.13.1990', '30/02/2020'];

const dates = parsed.reduce((acc, stringToCheck) => {
  if (Date.parse(stringToCheck)) {
		const milliseconds = Date.parse(stringToCheck);
		const date = new Date(milliseconds).toLocaleDateString('ru-RU');
    acc.push(date);
    return acc;
  }
  return acc;
}, []);

console.log(dates);

