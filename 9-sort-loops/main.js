const arr = [1, 40, -5, 10, 0, 1, 30, 500, -100];

function sort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) {
      break;
    }

    if (numbers[i] > numbers[i + 1]) {
      [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
      sort(numbers);
    }
  }
  return numbers;
}

console.log("Результат: ", sort(arr));
