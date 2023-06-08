function crypto(password) {
  if (typeof password !== "string" || password.length < 8) {
    return null;
  }
  const chars = password.split("");
  const half = Math.floor(chars.length / 2)
  const partOne = chars.slice(0, half)
  const partTwo = chars.slice(half)

  // const reversed = partOne.reduceRight((acc, el) => {
  //   acc.push(el);
  //   return acc;
  // }, []);
  const reversed = partOne.reverse();

  const replaced = partTwo.reduce((acc, el, elIndex, elements) => {
    acc[elements.length - (1 + elIndex)] = el;
    return acc;
  }, [])

  return [...replaced, ...reversed].join('');
}

function check(crypted, original) {
  const decrypted = crypto(crypted);
  return decrypted === original;
}

console.log(check("tlashtiwdrowssapgnolyrev", "verylongpasswordwithsalt"));
console.log(check("drowssap", "password"));
