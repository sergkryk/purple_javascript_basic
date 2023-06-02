function crypto(password) {
  if (typeof password !== "string" || password.length < 6) {
    return null;
  }
  const passLengthEqualTwo = password.length - (password.length % 2);
  const chars = password.split("");

  for (let i = 0; i < passLengthEqualTwo; i += 2) {
    const a = chars[i];
    const b = chars[i + 1];

    chars[i] = b;
    chars[i + 1] = a;
  }

  for (let i = 0; i < passLengthEqualTwo / 2; i++) {
    const a = chars[i];
    const b = chars[passLengthEqualTwo - (1 + i)];

    chars[i] = b;
    chars[passLengthEqualTwo - (1 + i)] = a;
  }
  return chars.join("");
}

function check(crypted, original) {
  const decrypted = crypto(crypted);
  return decrypted === original;
}

console.log(check("ltsathwirdwosspangloryve", "verylongpasswordwithsalt"));
console.log(check("sspaetcrses", "secretpasss"));
console.log(crypto("secretpasss"));
