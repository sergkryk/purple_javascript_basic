const addressLat = 2;
const addressLong = 8;
const positionLat = 2;
const positionLong = 2;

const distance = Math.sqrt((addressLat - positionLat)**2 + (addressLong - positionLong)**2);

console.log(`Расстояние до заданного места ${distance} метров.`)