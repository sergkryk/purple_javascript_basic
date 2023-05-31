function rubConverter(sum, target) {
  const rates = {
    usd: 0.0125,
    eur: 0.01111,
  };

  return converter(rates, sum, target);
}

function usdConverter(sum, target) {
  const rates = {
    rub: 80,
    eur: 0.8,
  };

  return converter(rates, sum, target);
}

function eurConverter(sum, target) {
  const rates = {
    rub: 90,
    usd: 1.2,
  };

  return converter(rates, sum, target);
}

function converter(rates, sum, target) {
  if (rates[target]) {
    return Number(sum) * rates[target];
  }
  return null;
}

function convert(sum, src, target) {
  switch (src) {
    case "rub":
      return rubConverter(sum, target);
    case "usd":
      return usdConverter(sum, target);
    case "eur":
      return eurConverter(sum, target);
    default:
      return null;
  }
}

console.log(convert(4000, 'eur', 'usd' ));
