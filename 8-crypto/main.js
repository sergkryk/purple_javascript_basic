function crypto(password) {
  if (typeof password !== "string" || password.length < 8) {
    return null;
  }
  const chars = password.split("");
  const half = Math.floor(chars.length / 2);
  const partOne = chars.slice(0, half).reverse();
  const partTwo = chars.slice(half);
  const partTwoLength = partTwo.length;

  [partTwo[0], partTwo[partTwoLength - 1]] = [partTwo[partTwoLength - 1], partTwo[0]];

  return [...partOne, ...partTwo].join("");
}

function check(crypted, original) {
  return crypto(crypted) === original;
}

console.log(check("ssapgnolyrevtordwithsalw", "verylongpasswordwithsalt"));
console.log(check("ssapdorw", "password"));
console.log(crypto("password"));
console.log(crypto("verylongpasswordwithsalt"));
