function crypto(password) {
  /*алгоритм
	последнее с предпоследней
	первое со второй
	третье с третьей с конца
	*/
  if (typeof password !== "string" || password.length < 6) {
    return null;
  }
  const initial = password.split("");
  const clone = initial.slice();

  initial[initial.length - 1] = clone[clone.length - 2];
  initial[initial.length - 2] = clone[clone.length - 1];

  initial[0] = clone[1];
  initial[1] = clone[0];

  initial[2] = clone[clone.length - 3];
  initial[initial.length - 3] = clone[2];

  return initial.join("");
}

function check(crypted, original) {
  const decrypted = crypto(crypted);
  return decrypted === original;
}

console.log(check("ajiascrvtp", "javascript"));
