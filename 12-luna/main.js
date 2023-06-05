const sample = "4561-2612-1234-5464";
const sample2 = "2626-2626-2626-2626";

function isCard(cardNum) {
  cardNum = cardNum.replaceAll("-", "");

  const reduced = cardNum.split("").reduce((acc, el, elIndex) => {
    let num = Number(el);

    if (elIndex % 2 === 0) {
      num = num * 2;
      if (num > 9) {
        num = num - 9;
      }
    }

    acc = acc + num;
    return acc;
  }, 0);

  return reduced % 10 === 0;
}

console.log(isCard(sample));
console.log(isCard(sample2));
