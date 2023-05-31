const hasLicense = true;
const age = 17;
const isDrunk = false;

const message = hasLicense && age >= 18 && !isDrunk;

console.log(message ? "Может" : "Не может");
