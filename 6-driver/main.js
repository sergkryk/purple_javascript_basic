let hasLicense = true;
let age = 17;
let isDrunk = false;

let message = hasLicense && age >= 18 && !isDrunk;

console.log(message ? "Может" : "Не может");
