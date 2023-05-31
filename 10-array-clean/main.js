function arrayClean(numbers, cb) {
  const result = [];
  for (let number of numbers) {
    if (!cb(number)) {
      result.push(number);
    }
  }
  return result;
}

function isEqualToFive(number) {
  return number === 5;
}

const numbers = [1, 2, 4, 5, 7, 9, 3, 2, 5];

const cleaned = arrayClean(numbers, isEqualToFive);

console.log(cleaned);
